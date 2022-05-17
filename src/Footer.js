import party from "../src/assets/party.png";
import sad from "../src/assets/sad.png";
import { Link } from "react-router-dom";

function Footer({ contador, qtdePerguntas, icones }) {
  let jogoEncerrado = contador === qtdePerguntas ? true : false;
  let cardIncorreto = icones.find((icone) => icone.icone === "close-circle");

  let titulo = "Parabéns!";
  let mensagem = "Você não esqueceu de nenhum flashcard!";
  let emoji = party;

  if (cardIncorreto) {
    titulo = "Putz...";
    mensagem = "Ainda faltam alguns... Mas não desanime!";
    emoji = sad;
  }

  console.log(icones);
  return (
    <footer>
      {jogoEncerrado && (
        <div>
          <p className="bold">
            <img src={emoji} alt="Emoji" /> {titulo}
          </p>
          <p className="message">{mensagem}</p>
        </div>
      )}

      <div className="progress-container">
        <p>
          {contador}/{qtdePerguntas} CONCLUÍDOS
        </p>
        <div className="icons-container">
          {icones.map((icone, index) => (
            <ion-icon
              key={index}
              style={{ color: icone.cor }}
              name={icone.icone}
            ></ion-icon>
          ))}
        </div>
      </div>

      {jogoEncerrado && (
        <Link to="/">
          <button>Restart</button>
        </Link>
      )}
    </footer>
  );
}

export default Footer;
