import "./App.css";

import Card from "./Components/Card/Index";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="titulo sombra-titulo-hover">
          Seja bem vindo a Björn to Travel!
        </h1>
        <p className="texto">
          Vê se você se identifica: já passa da meia-noite, e você está
          assistindo aos programas noturnos sozinho no seu apartamento. Os
          ventos do outono soprando lá fora, e te dá até uma tristeza de olhar
          pela janela. Nenhuma alma viva lá fora, ninguém pra ouvir seus pedidos
        </p>
        <p className="texto">
          Acho que todo mundo já passou por isso né? É por isso que fundamos a
          Björn to Travel! Aqui você pode fazer planos de viagem diretamente do
          conforto da sua casa, e conhecer o mundo todo, tudo isso por preços
          acessíveis!
        </p>
      </header>
      <main>
        <h2 className="titulo sombra-titulo-hover">Conheça Nossos Planos!</h2>
        <div className="card__container">
          <Card
            titulo={"Miami"}
            descricao={
              "Venha conhecer em primeira mão a famosa dança de Lance Vance!"
            }
            classe={"card-1"}
            btnTexto={"Reserve por x6 de R$100,00!"}
          />
          <Card
            titulo={"California"}
            descricao={
              "Se você também queria que suas estradas te levassem para sua casa em Santa Rosa, é esse o plano que te pertence!"
            }
            classe={"card-2"}
            btnTexto={"Reserve por x8 de R$100,00!"}
          />
          <Card
            titulo={"Grécia"}
            descricao={
              "Lá vamos nós de novo! Como você poderia resistir à Grécia?"
            }
            classe={"card-3"}
            btnTexto={"Reserve por x12 de R$100,00!"}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
