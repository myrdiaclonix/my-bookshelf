import Image from "next/image";

export default function Ganbatte() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 my-8 px-4">
      <div className="leading-relaxed text-shadow-blue-md/90 p-6 my-description text-lg my-auto">
        <p>Este foi um presente da tia Lu, que acabei demorando um pouco para terminar. É uma leitura fácil, com vários capítulos de pouco texto, típico para o jovem do século XXI. Infelizmente passei a não curtir esse estilo autoajuda, pois a meu ver personaliza problemas que são sociais, como a falta de educação ou saúde. Basicamente, o livro diz para me esforçar. Como se metade do Brasil estivesse pobre e passando por dificuldades por estarem coçando o bumbum. A melhor metáfora para mim foi a da segunda flecha. A expressão legal foi: viagem a Ítaca.</p>
        <p>Nota: ⭐⭐⭐. Seria menos se não tivesse algumas curiosidades.</p>
        <p>11/10/2025</p>
      </div>
      <div className="animated-img origin-center -z-10 flex-shrink-0 mx-auto">
        <Image
          src="/books/ganbatte.webp"
          width={273}
          height={398}
          alt="Imagem de Ganbatte"
        />
      </div>
    </div>
  );
}
