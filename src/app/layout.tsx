import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
      <body className={`${lora.className} antialiased m-4`}>
        {children}
        <div className="text-center">
          <audio controls preload="auto" className="inline-block">
            <source src="/audio/Loyalty Freak Music - Chill For Real.mp3" type="audio/mpeg" />
          Infelizmente seu navegador não consegue tocar músicas.
          </audio>
        </div>
        <p className="text-center opacity-50">Escrito por myrdiaclonix</p>
      </body>
    </html>
  );
}
