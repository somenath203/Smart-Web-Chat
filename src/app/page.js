'use client';

const Page = () => {
  return (
    <div className="min-h-screen text-center p-4 bg-zinc-800 flex flex-col gap-5 items-center justify-center">

      <p className="uppercase tracking-wider text-xl lg:text-4xl">Smart Web Chat</p>

      <p className="mt-3 text-sm lg:text-lg">
        To chat with the website, use a URL in the following format:{' '}
        <span className="font-bold text-zinc-300 break-all">base_url//target_url</span>
      </p>

      <p>For example:</p>

      <p className="text-sm lg:text-lg underline break-all">
        <a
          href="https://smart-web-chat.vercel.app//https:/en.wikipedia.org/wiki/Albert_Einstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://smart-web-chat.vercel.app//https:/en.wikipedia.org/wiki/Albert_Einstein
        </a>
      </p>

    </div>
  );
};

export default Page;
