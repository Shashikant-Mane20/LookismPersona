import { useState } from "react";
import PersonaCard from "../components/PersonaCard";
import Chat from "../components/Chat";

function PersonaPage({ persona }) {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      <PersonaCard persona={persona} />
      <Chat persona={persona} chatHistory={chatHistory} setChatHistory={setChatHistory} />
    </div>
  );
}

export default PersonaPage;
