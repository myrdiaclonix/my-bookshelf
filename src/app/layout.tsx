import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const lora = Lora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estante animada",
  description: "Onde coloco minhas leituras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lora.className} antialiased m-4 overflow-x-hidden`}>
        {children}
        <p className="text-center opacity-50">Escrito por myrdiaclonix</p>
        <div className="flex flex-wrap">
          <a href="https://estanteanimada.vercel.app">
            <Image
              src="/badge.png"
              width="88"
              height="31"
              alt="Visite meu site!"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
