'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
// If you have a shadcn Textarea component, import it. Otherwise, you can use a regular textarea styled with Tailwind.
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <Textarea
        className="flex-1 resize-none"
        rows={2}
        placeholder="Enter your prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" className="whitespace-nowrap">
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
