'use client';

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";

const ChatInput = ({ handleSubmit, input, handleInputChange }) => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">

        <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">

            <div className="relative flex h-full flex-1 items-stretched md:flex-col">

                <div className="relative flex flex-col w-full flex-grow p-4">

                    <form className="relative" onSubmit={handleSubmit}>

                        <Textarea 
                            minRows={4} 
                            autoFocus 
                            value={input}
                            placeholder="enter your question..." className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
                            onChange={handleInputChange} 
                        />

                        <Button 
                            size="small" 
                            type="submit" 
                            disabled={!input}
                            className="absolute z-10 border border-border bg-zinc-900 disabled:bg-zinc-700 disabled:cursor-not-allowed right-2 bottom-2"
                        >
                         
                         <Send className="size-4" />
                         
                        </Button>

                    </form>

                </div>

            </div>

        </div>

    </div>
  )
};

export default ChatInput;