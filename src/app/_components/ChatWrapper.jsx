'use client';

import { useChat } from 'ai/react';

import MessagesComponent from './MessagesComponent';
import ChatInput from './ChatInput';


const ChatWrapper = ({ sessionId,websiteURL }) => {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat-stream',
    body: { sessionId }

  });

  return (
    <div className='relative min-h-screen antialiased bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2'>

      <div className="flex-1 text-white bg-zinc-800 justify-between flex flex-col">

        <MessagesComponent messages={messages} websiteURL={websiteURL} />

      </div>

     <ChatInput handleSubmit={handleSubmit} input={input} handleInputChange={handleInputChange} />


    </div>
  )
}

export default ChatWrapper;