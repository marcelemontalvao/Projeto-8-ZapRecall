import { Link } from "react-router-dom"

export default function BoasVindas (props) {
    return (
        <div className="medidas boas-vindas">
            <img src="/assets/logo.png" alt="logo" />
            <p>ZapRecall</p>
            <Link to="/perguntas">
                <button>Iniciar Recall</button>
            </Link>
       </div>
    )
}