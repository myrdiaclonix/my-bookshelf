"use client";
import Image from "next/image";
import { useState } from "react";

export default function Badge() {
  const [copied, setCopied] = useState(false);
  const code = `<a href="https://estanteanimada.vercel.app">
  <img src="https://raw.githubusercontent.com/myrdiaclonix/my-bookshelf/refs/heads/main/public/badge.png" width="88" height="31" alt="Estante animada, o site de leituras de myrdiaclonix!"/>
</a>`;

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-4 items-center flex-wrap">
      <p>Você pode colocar meu botão no seu site!</p>
      <a href="https://estanteanimada.vercel.app">
        <Image
          src="/badge.png"
          width="88"
          height="31"
          alt="Estante animada, o site de leituras de myrdiaclonix!"
        />
      </a>
      <textarea
        readOnly
        value={code}
        className="bg-gray-300/75 font-mono text-xs w-92 resize-none"
      />
      <button
        onClick={copy}
        className="bg-zinc-800/75 text-cyan-50 px-2 py-1 rounded hover:bg-zinc-600/75 transition-all"
      >
        {copied ? "Copiado!" : "Copiar código"}
      </button>
    </div>
  );
}
