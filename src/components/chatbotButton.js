"use client";
import React, { useState } from "react";
import { HiOutlineChatAlt2, HiX } from "react-icons/hi";

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
   

    <div className="fixed bottom-4 right-4 z-50">
      {isChatOpen ? (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          {/* Chat Header */}
          <div className="bg-yellow-600 text-white p-4 flex justify-between items-center rounded-t-lg">
            <span className="font-bold">Chatbot</span>
            <button
              onClick={toggleChat}
              className="hover:bg-yellow-700 p-1 rounded-full"
            >
              <HiX size={24} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-gray-700">Bonjour ! Comment puis-je vous aider ?</p>
            {/* Vous pouvez intégrer ici une API comme ChatGPT pour les réponses automatiques */}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Tapez votre message..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <HiOutlineChatAlt2 size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatbotButton;

