import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./Provider";
import { Outfit } from "next/font/google";


export const metadata: Metadata = {
  title: "InnoAI",
  description: "AI Generated Content in just one click",
};
const outfit = Outfit({subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <ClerkProvider>
          <Provider>
            
            {children}
          </Provider>
          
        </ClerkProvider>
      </body>
    </html>
  );
}
