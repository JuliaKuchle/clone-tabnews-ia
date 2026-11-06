import Calculator from "./calculator";
import Ask from "./ask";

const stack = { display: "grid", gap: "1.25rem" };

export default function Page() {
  return (
    <main className="wrap">
      <header className="hero">
        <div className="lid" aria-hidden="true"><span>1 POTE<br />CONGELADO<br />24 H</span></div>
        <p className="label">Uma proposta, feita com carinho</p>
        <h1>A gente devia comprar uma <em>Ninja Creami.</em></h1>
        <p className="lede">Você congela um pote de quase qualquer coisa. No dia seguinte, ela transforma em sorvete. Eu pensei muito nisso e tenho argumentos.</p>
      </header>

      <section>
        <p className="label" style={{ marginBottom: ".75rem" }}>Cardápio de motivos do dia</p>
        <div className="menu">
          <div className="item"><h3>Sorvete quando der vontade</h3><span className="tag">~5 min</span>
            <p>Congela a base, bate na hora que bater a vontade. Chega de sair à noite atrás de um sabor específico.</p></div>
          <div className="item"><h3>A gente escolhe o que vai dentro</h3><span className="tag">do nosso jeito</span>
            <p>Menos açúcar, mais proteína, sem lactose, mais pedaço de cookie. Até o whey vira algo com gosto de sobremesa.</p></div>
          <div className="item"><h3>Não é só sorvete</h3><span className="tag">sorbet · gelato · milkshake</span>
            <p>Fruta congelada vira sorbet. Açaí na tigela, milkshake e frozen yogurt estão a um botão de distância.</p></div>
          <div className="item"><h3>Mix-ins do jeito certo</h3><span className="tag">rebater</span>
            <p>Bate, abre um buraco no meio, joga o Oreo e roda o programa de mix-in. Tem pedaço em toda colherada.</p></div>
          <div className="item"><h3>Um programa novo pra nós dois</h3><span className="tag">2 colheres</span>
            <p>A gente inventa um sabor, dá um nome ridículo e avalia juntos na noite seguinte.</p></div>
        </div>
      </section>

      <section style={stack}>
        <h2>É difícil? Nem um pouco.</h2>
        <div className="steps">
          <div className="step"><b>1</b><p>Mistura a base no pote: leite, um pouco de açúcar e o sabor. Dois minutos.</p></div>
          <div className="step"><b>2</b><p>Tampa e freezer por 24 horas. A gente não faz nada.</p></div>
          <div className="step"><b>3</b><p>Coloca na máquina, aperta um botão e come.</p></div>
        </div>
      </section>

      <section style={stack}>
        <h2>Ela se paga</h2>
        <p>Hoje a gente paga uns R$ 23 por gelato, cada um. Ajusta aqui quanto a gente toma de verdade. Seja sincero.</p>
        <Calculator />
      </section>

      <section style={stack}>
        <h2>Suas objeções, respondidas</h2>
        <dl className="qa">
          <div><dt>&quot;Ela faz barulho.&quot;</dt><dd>Faz, por uns cinco minutos. A gente liga enquanto discute o que vai assistir.</dd></div>
          <div><dt>&quot;Onde a gente vai guardar?&quot;</dt><dd>Ela tem mais ou menos o tamanho de um liquidificador. Eu mesma libero o espaço.</dd></div>
          <div><dt>&quot;A gente vai usar duas vezes e esquecer.&quot;</dt><dd>Ninguém esquece uma máquina que faz sobremesa. E a calculadora mostra que a gente toma bastante sorvete.</dd></div>
          <div><dt>&quot;Não dá pra só comprar sorvete?&quot;</dt><dd>Dá. Mas nenhuma sorveteria vende sorvete de paçoca com doce de leite, proteína e exatamente a quantidade certa de paçoca esfarelada por cima.</dd></div>
        </dl>
      </section>

      <Ask />
    </main>
  );
}
