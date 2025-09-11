
import React from 'react';
import { MessageCircle } from 'lucide-react';

export function TelegramButton() {
  const handleTelegramClick = () => {
    window.open('https://t.me/RMENERGY', '_blank');
  };

  return (
    <button
      onClick={handleTelegramClick}
      className="fixed bottom-32 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 cursor-hover group"
      title="Junte-se ao nosso Telegram"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75 group-hover:opacity-0 transition-opacity"></div>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Telegram RME Energy
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
      </div>
    </button>
  );
}
