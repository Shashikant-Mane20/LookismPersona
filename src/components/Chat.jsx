import { useState } from "react";
import ChatMessage from "./ChatMessage";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

function Chat({ persona, chatHistory, setChatHistory }) {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    const updatedHistory = [...chatHistory, newMessage];
    setChatHistory(updatedHistory);
    setInput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `You are ${persona.name}, ${persona.role}. Respond in character.\nUser: ${input}`;
      const result = await model.generateContent(prompt);
      const reply = result.response.text();

      setChatHistory([...updatedHistory, { sender: "ai", text: reply }]);
    } catch (err) {
      console.error(err);
      setChatHistory([...updatedHistory, { sender: "ai", text: "Error fetching response." }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full lg:w-2/3 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <div className="flex-1 p-4 overflow-y-auto max-h-[70vh] space-y-3">
        {chatHistory.map((msg, idx) => (
          <ChatMessage key={idx} msg={msg} />
        ))}
      </div>
      <div className="flex p-3 border-t dark:border-gray-700">
        <textarea
          className="flex-1 resize-none p-2 rounded-md border dark:border-gray-700 dark:bg-gray-900"
          rows="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Chat with ${persona.name}...`}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
