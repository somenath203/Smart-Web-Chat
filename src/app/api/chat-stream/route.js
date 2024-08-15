import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";


export const POST = async (req) => {

    try {

        const { messages, sessionId } = await req.json();

        const lastMessage = messages[messages.length - 1].content;

        const response = await ragChat.chat(lastMessage, {
            sessionId: sessionId,
            streaming: true
        });

        
        return aiUseChatAdapter(response);
        

    } catch (error) {
        
        console.log(error);
        
    }

}