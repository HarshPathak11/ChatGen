'use client';

import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import MessageBubble from './components/MessageBubble';
import LivePreview from './components/LivePreview';
import { generateCode } from '@/lib/aiClient';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  content: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [generatedCode, setGeneratedCode] = useState<string>('');

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = { id: Date.now(), sender: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);

    try {
      const result = await generateCode(message);
      console.log("result", result);
      const combinedCode = `<style>${result.css}</style>\n${result.html}`;
      const botMessage: Message = { id: Date.now() + 1, sender: 'bot', content: combinedCode };
      setMessages(prev => [...prev, botMessage]);
      setGeneratedCode(combinedCode);
    } catch (error) {
      console.error('Error generating code:', error);
    }
  };

  return (
    <div className="pt-14 flex flex-col md:flex-row h-screen bg-gray-50 dark:bg-gray-900">
      {/* Chat Section */}
      <div className="flex-1 p-4 md:p-6 flex flex-col bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 overflow-y-auto">
        <div className="mb-4 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Chat</h1>
        </div>
        <div className="flex-1 space-y-2">
          {messages.map(message => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
        <div className="mt-4">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>

      {/* Live Preview Section */}
      <div className="flex-1 p-4 md:p-6 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center md:text-left">Live Preview</h2>
        <div className="h-full min-h-[300px] p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm overflow-y-auto">
          <LivePreview code={generatedCode} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
