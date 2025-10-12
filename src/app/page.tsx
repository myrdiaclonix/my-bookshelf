import Badge from "@/components/Badge";
import OJogador from "@/components/books/20251009";
import Ganbatte from "@/components/books/20251011";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl text-center">Estante animada</h1>
      <p className="text-center">Onde coloco minhas leituras</p>
      <div className="text-center">
        <audio controls preload="auto" className="inline-block">
          <source src="/audio/Loyalty Freak Music - Chill For Real.mp3" type="audio/mpeg" />
        Infelizmente seu navegador não consegue tocar músicas.
        </audio>
      </div>
      <OJogador />
      <Ganbatte />
      
      <Badge />
      <div className="flex gap-1 pt-4">
        <a href="https://loyaltyfreakmusic.com/">
          <img src="https://loyaltyfreakmusic.com/wp-content/uploads/2024/12/LFM_bouton.gif" width="88" height="31" alt="Loyalty Freak Music website, Public Domain Creative Commons 0 licensed music" />
        </a>
      </div>
      <p className="pt-4">Escrito por myrdiaclonix</p>
    </div>
  );
}
