import React from 'react';
import { UserCircle, Calendar, HistoryIcon, Settings, HelpCircle } from 'lucide-react';

interface ChatSidebarProps {
  isOpen: boolean;
  userName: string;
  userEmail: string;
  mood: number;
  setMood: (value: number) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ 
  isOpen, 
  userName, 
  userEmail,
  mood,
  setMood
}) => {
  // Get mood label based on value
  const getMoodLabel = (value: number): string => {
    if (value <= 2) return 'Struggling';
    if (value <= 4) return 'Down';
    if (value <= 6) return 'Neutral';
    if (value <= 8) return 'Good';
    return 'Excellent';
  };

  // Get mood color based on value
  const getMoodColor = (value: number): string => {
    if (value <= 2) return 'bg-red-500';
    if (value <= 4) return 'bg-orange-400';
    if (value <= 6) return 'bg-yellow-400';
    if (value <= 8) return 'bg-green-400';
    return 'bg-emerald-500';
  };

  if (!isOpen) return null;

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col overflow-hidden transition-all duration-300">
      {/* User Profile */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
            <UserCircle className="h-14 w-14 text-indigo-500" />
          </div>
          <h3 className="font-semibold text-gray-900">{userName}</h3>
          <p className="text-sm text-gray-500">{userEmail}</p>
        </div>
        
        {/* Mood Tracker */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            How are you feeling today?
          </label>
          <div className="mb-2 flex justify-between">
            <span className="text-xs text-gray-500">Struggling</span>
            <span className="text-xs text-gray-500">Excellent</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={mood}
            onChange={(e) => setMood(parseInt(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="flex items-center mt-2">
            <div className={`w-3 h-3 rounded-full ${getMoodColor(mood)} mr-2`}></div>
            <span className="text-sm text-gray-700">{getMoodLabel(mood)}</span>
          </div>
        </div>
      </div>
      
      {/* Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
              <Calendar className="h-5 w-5" />
              <span>Schedule Session</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
              <HistoryIcon className="h-5 w-5" />
              <span>Conversation History</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Help link */}
      <div className="p-4 border-t border-gray-200">
        <a href="#" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors">
          <HelpCircle className="h-5 w-5" />
          <span className="text-sm font-medium">Help & Resources</span>
        </a>
      </div>
    </aside>
  );
};

export default ChatSidebar;