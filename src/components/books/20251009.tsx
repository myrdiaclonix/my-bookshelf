import Image from "next/image";

export default function OJogador() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 my-8 px-4 text-center">
      <div className="animated-img origin-center -z-10 flex-shrink-0 mx-auto">
        <Image
          src="/books/ojogador.webp"
          width={339}
          height={462}
          alt="Imagem de O Jogador"
        />
      </div>
      <div className="leading-relaxed text-shadow-blue-md/90 p-6 my-description text-lg text-right my-auto">
        <p>Queria ler este livro há muito tempo. Tanto por ser um livro pequeno quanto por ja ter lido um trecho dele no Kumon. Conta a história de um rapaz chamado Aleksei em um período de sua vida em que está junto com outras personagens interessantes em um hotel de luxo da cidade de Roletemburgo. Achei legal a forma com que a história se passou pois explora o mental de um jogador contumaz de roleta. Os personagens são interessantes e é um dos livros onde o casal principal fica num impasse romântico, coisa que gosto por me identificar. Tem nomes bonitos como Praskóvia e de Cominges.</p>
        <p>Nota: ⭐⭐⭐⭐. Bom livro para ler no original russo.</p>
        <p>09/10/2025</p>
      </div>
    </div>
  );
}
