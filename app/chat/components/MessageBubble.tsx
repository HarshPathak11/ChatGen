'use client';

import React from 'react';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  content: string;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div
      className={`my-2 p-4 rounded-xl max-w-md break-words shadow-sm 
        ${isUser ? 'bg-blue-600 text-white self-end' : 'bg-gray-100 text-gray-900 self-start'}`}
    >
      {isUser ? (
        <p className="text-base">{message.content}</p>
      ) : (
        <pre className="whitespace-pre-wrap text-sm">{message.content}</pre>
      )}
    </div>
  );
};

export default MessageBubble;
