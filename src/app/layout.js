import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "./_components/Providers";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Smart Web Chat",
  description: "This is an online tool which user can use to chat with any website.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="h-screen antialiased dark text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
