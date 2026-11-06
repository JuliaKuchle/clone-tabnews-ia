"use client";

import { useState } from "react";

const CASEIRO = 8; // custo estimado de uma porção feita em casa, em R$
const brl = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: Number.isInteger(n) ? 0 : 2 });

function Field({ id, label, value, display, onChange, ...range }) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} <output>{display}</output>
      </label>
      <input type="range" id={id} value={value} onChange={(e) => onChange(+e.target.value)} {...range} />
    </div>
  );
}

export default function Calculator() {
  const [gelatos, setGelatos] = useState(4);
  const [store, setStore] = useState(23);
  const [machine, setMachine] = useState(1745);

  const economia = gelatos * (store - CASEIRO);
  const w = Math.ceil(machine / economia);
  const meses = (w / 4.33).toLocaleString("pt-BR", { maximumFractionDigits: 1 });

  return (
    <form className="calc" onSubmit={(e) => e.preventDefault()}>
      <Field id="gelatos" label="Gelatos por semana (nós dois juntos)" value={gelatos} display={gelatos} onChange={setGelatos} min="1" max="14" step="1" />
      <Field id="store" label="Preço de cada gelato" value={store} display={brl(store)} onChange={setStore} min="10" max="50" step="1" />
      <Field id="machine" label="Preço da máquina" value={machine} display={brl(machine)} onChange={setMachine} min="1000" max="2500" step="5" />
      <div className="result">
        <span className="label">Se paga em</span>
        {economia <= 0 ? (
          <>
            <span className="big">Nunca, mas continua divertido</span>
            <p className="fine">Com esse preço, fazer em casa não sai mais barato. Os sabores ainda ganham.</p>
          </>
        ) : (
          <>
            <span className="big">{w + (w === 1 ? " semana" : " semanas")}</span>
            <p className="fine">
              A gente economiza uns {brl(Math.round(economia))} por semana (≈ {meses} meses pra se pagar), considerando
              que uma porção feita em casa custa uns R$ 8 em ingredientes.
            </p>
          </>
        )}
      </div>
    </form>
  );
}
