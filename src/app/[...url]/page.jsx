import { ragChat } from "@/lib/rag-chat";
import { redisDB } from "@/lib/redisDB";
import ChatWrapper from "../_components/ChatWrapper";
import { v4 as uuidv4 } from 'uuid';


const reconstructURL = (url) => {

  const urlDecoded = url.map((item) => decodeURIComponent(item));

  return urlDecoded.join('//');
  
}


const Page = async ({ params }) => {

  const urlReconstructed = reconstructURL(params?.url);
  
  const isAlreadyIndexed = await redisDB.sismember("indexed-urls", urlReconstructed);


  const sessionID = uuidv4();


  if(!isAlreadyIndexed) {


    await ragChat.context.add({
      type: "html",
      source: urlReconstructed,
      config: {
        chunkOverlap: 50, chunkSize: 200
      }
    });

    await redisDB.sadd("indexed-urls", urlReconstructed);

  }

  return (
    <div>

      <ChatWrapper sessionId={sessionID} websiteURL={urlReconstructed} />
      
    </div>
  )

};

export default Page;