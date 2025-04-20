import React from 'react';
import { Brain, Menu, LogOut } from 'lucide-react';

interface ChatHeaderProps {
  userName: string;
  onLogout: () => void;
  toggleSidebar: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ userName, onLogout, toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-indigo-100">
              <Brain className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="font-semibold text-gray-800">TalkSpace AI</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Hi, {userName}</span>
          <button
            onClick={onLogout}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
            aria-label="Log out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;