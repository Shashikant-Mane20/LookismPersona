function ChatMessage({ msg }) {
  return (
    <div
      className={`flex ${
        msg.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-3 py-2 rounded-lg max-w-xs ${
          msg.sender === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}

export default ChatMessage;
