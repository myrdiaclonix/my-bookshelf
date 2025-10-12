import OJogador from "@/components/books/20251009";
import Ganbatte from "@/components/books/20251011";

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
    </div>
  );
}
