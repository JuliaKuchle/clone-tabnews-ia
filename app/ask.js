"use client";

import { useState } from "react";

const frases = ["Não", "Tem certeza?", "Sério?", "Pensa no sorbet", "Tenta de novo", "Não dá pra clicar em mim"];
const cores = ["var(--accent)", "var(--mint)", "#f5c542", "#7aa7ff"];

export default function Ask() {
  const [tentativas, setTentativas] = useState(0);
  const [offset, setOffset] = useState([0, 0]);
  const [sprinkles, setSprinkles] = useState(null);

  // O botão "Não" é tímido.
  function foge(e) {
    e.preventDefault();
    setTentativas((t) => t + 1);
    setOffset([(Math.random() * 2 - 1) * 120, (Math.random() * 2 - 1) * 40]);
  }

  function aceita() {
    setSprinkles(
      Array.from({ length: 80 }, (_, i) => ({
        left: Math.random() * 100 + "vw",
        background: cores[i % cores.length],
        animationDelay: Math.random() * 0.8 + "s",
      }))
    );
    setTimeout(() => setSprinkles([]), 3500);
  }

  return (
    <section className="ask">
      <h2>E aí… vamos comprar?</h2>
      {sprinkles ? (
        <div className="verdict">
          <p>Melhor decisão de todas. O primeiro pote é por minha conta. 🍨</p>
          <a className="buy" href="https://www.amazon.com.br/Ninja-Creami-Sorveteira-127v-Milkshakes/dp/B0DHSWL7D6" target="_blank" rel="noopener">
            Ver na Amazon
          </a>
        </div>
      ) : (
        <div className="buttons">
          <button type="button" id="yes" onClick={aceita} style={{ transform: `scale(${Math.min(1 + tentativas * 0.12, 1.8)})` }}>
            Sim, vamos!
          </button>
          <button type="button" id="no" onMouseEnter={foge} onClick={foge} style={{ transform: `translate(${offset[0]}px,${offset[1]}px)` }}>
            {frases[Math.min(tentativas, frases.length - 1)]}
          </button>
        </div>
      )}
      <div className="sprinkles" aria-hidden="true">
        {sprinkles?.map((style, i) => <i key={i} className="sprinkle" style={style} />)}
      </div>
    </section>
  );
}
