import "./Styles.css";

const Card = ({ titulo, descricao, classe, btnTexto }) => {
  return (
    <div className={classe}>
      <h3 className="subtitulo sombra-subtitulo-hover">{titulo}</h3>
      <p className="texto">{descricao}</p>
      <input type="button" value={btnTexto} className="btn__geral texto" />
    </div>
  );
};

export default Card;
