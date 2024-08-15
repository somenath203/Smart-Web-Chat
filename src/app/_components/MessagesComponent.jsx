'use client';

import { MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";

import SingleMessageComponent from "./SingleMessageComponent";


const MessagesComponent = ({ messages, websiteURL }) => {


  const messagesRef = useRef(null);

  useEffect(() => {

    if(messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }

  }, [messages]);

  
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto" ref={messagesRef}>

      {messages?.length > 0 ? messages?.map((message, index) => {

        return <SingleMessageComponent 
          key={index} 
          content={message?.content} 
          isUserMessage={message?.role === 'user' }
        />

      }) : <div className="flex-1 flex flex-col items-center justify-center gap-3">

        <MessageSquare className="size-8 text-blue-500" />

        <h3 className="font-semibold text-xl text-center">You are all set to ask questions about <span className="font-bold text-zinc-300">{websiteURL}</span> ✅</h3>

        <p className="text-zinc-500 text-base">Ask your first question ✌️</p>

      </div>}

    </div>
  )
}

export default MessagesComponent;