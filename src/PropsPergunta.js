import MostrarPergunta from "./MostrarPergunta"
import React from "react"
export default function PropsPergunta(props) {
    const [pergunta, setPergunta] = React.useState(false)
    return (
        <>
            { pergunta === false ? 
                <div className="pergunta" onClick={() => {setPergunta(true)} } >
                    <span>Pergunta {props.numero + 1}</span>
                    <ion-icon name="play-outline"  /> 
                </div> : <MostrarPergunta pergunta={props.perguntas.Title} resposta={props.perguntas.Answer} numero={props.numero +1} contador={props.contador} setContador={props.setContador} />
            }
        </>
    )
}