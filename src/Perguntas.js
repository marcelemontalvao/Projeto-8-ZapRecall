import React from "react"
import MostrarPergunta from "./MostrarPergunta"

function PropsPergunta(props) {
    const [pergunta, setPergunta] = React.useState(false)
    return (
        <>
            { pergunta === false ? 
                <div className="pergunta" onClick={() => {setPergunta(true)} } >
                    <span>Pergunta {}</span>
                    <ion-icon name="play-outline"  />
                </div> : <MostrarPergunta pergunta={props.Title} />
            }
        </>
    )
}

export default function Perguntas() {
    const objQuestion = [
        {
            Title: 'O que é JSX?' ,
            Answer: 'Uma extensão de linguagem do JavaScript'},
        {
            Title: 'O React é __',
            Answer: 'uma biblioteca JavaScript para construção de interfaces'},
        {
            Title: 'Componentes devem iniciar com __',
            Answer: 'letra maiúscula'},
        {
            Title: 'O ReactDOM nos ajuda __ ',
            Answer: 'interagindo com a DOM para colocar componentes React na mesma'}
    ]
    return (
        <>
            <div className="medidas perguntas">
                <header>
                    <img src="/assets/logo-pequeno.png" alt="logo-pequeno" />
                    <span>ZapRecall</span>
                </header>
               <div>
                 {objQuestion.map((pergunta,index) => <PropsPergunta numero={pergunta} key={index} />)}
               </div>
               <footer>
                    <p>O/4 CONCLUIDOS</p>
               </footer>
            </div>
        </>
    )
}
