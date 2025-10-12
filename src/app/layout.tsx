import type { Metadata } from "next";
import { Jacquard_12, Jersey_10, Lora, Texturina } from "next/font/google";
import "./globals.css";

const texturina = Texturina({
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
      <body className={`${texturina.className} p-4 overflow-x-hidden bg-cyan-50`}>
        {children}
      </body>
    </html>
  );
}
