import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import ChatHeader from '../components/ChatHeader';
import ChatSidebar from '../components/ChatSidebar';
import MessageBubble from '../components/MessageBubble';
import { Send, Paperclip, Smile } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Initial bot greeting message
const initialMessages: Message[] = [
  {
    id: 'welcome-msg',
    text: "Hello! I'm your TalkSpace AI companion. How are you feeling today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Mock responses from the AI
const botResponses: string[] = [
  "That's interesting. Could you tell me more about why you feel that way?",
  "I understand. It sounds like you're going through a challenging time. What do you think triggered these feelings?",
  "Thank you for sharing that with me. How long have you been experiencing this?",
  "I'm here to listen and support you. What would be most helpful for you right now?",
  "It takes courage to express your feelings. Have you tried any strategies to manage these emotions?",
  "That makes sense. Many people experience similar feelings. Would you like to explore some coping techniques?",
  "I hear you. Let's break this down together. What's one small step you could take today?",
];

// Get a random response from the bot
const getRandomBotResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * botResponses.length);
  return botResponses[randomIndex];
};

const Chat: React.FC = () => {
  const { user, logout } = useAuth();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [mood, setMood] = useState<number>(5); // Scale from 1-10

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');
    
    // Show bot typing indicator
    setIsBotTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: getRandomBotResponse(),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsBotTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <ChatHeader 
        userName={user?.name || ''}
        onLogout={logout}
        toggleSidebar={toggleSidebar}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <ChatSidebar 
          isOpen={isSidebarOpen} 
          userName={user?.name || ''} 
          userEmail={user?.email || ''}
          mood={mood}
          setMood={setMood}
        />
        
        {/* Main chat area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto">
              {messages.map((message) => (
                <MessageBubble 
                  key={message.id}
                  message={message}
                  isUser={message.sender === 'user'}
                />
              ))}
              
              {isBotTyping && (
                <div className="flex items-center space-x-2 text-gray-500 p-2 max-w-xs">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Message input */}
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative flex items-center bg-gray-100 rounded-lg px-4 py-2">
                <button
                  className="text-gray-500 hover:text-indigo-600 mr-2"
                  aria-label="Attach file"
                >
                  <Paperclip size={20} />
                </button>
                
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent border-none focus:ring-0 resize-none max-h-32 py-2"
                  rows={1}
                />
                
                <div className="flex items-center">
                  <button
                    className="text-gray-500 hover:text-indigo-600 mr-2"
                    aria-label="Add emoji"
                  >
                    <Smile size={20} />
                  </button>
                  
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className={`p-2 rounded-full ${
                      newMessage.trim() 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors`}
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                TalkSpace AI is designed for mental wellness support, not medical advice. If you're in crisis, please call 988 or text HOME to 741741 for immediate help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;