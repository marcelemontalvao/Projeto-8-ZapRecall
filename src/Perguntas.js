import React from "react"
import PropsPergunta from "./PropsPergunta"

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
            Answer: 'interagindo com a DOM para colocar componentes React na mesma'},
        {
            Title: 'Usamos o npm para __ ',
            Answer: 'gerenciar os pacotes necessários e suas dependêncisa'},
        {
            Title: 'Podemos colocar __ dentro do JSX',
            Answer: 'expressões'},
        {
            Title: 'Usamos props para __',
            Answer: 'passar diferentes informações para componentes '},
        {
            Title: 'Usamos estado (state) para __',
            Answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ]
    return (
        <>
            <div className="medidas perguntas">
                <header>
                    <img src="/assets/logo-pequeno.png" alt="logo-pequeno" />
                    <span>ZapRecall</span>
                </header>
               <div className="margin">
                 {objQuestion.map((pergunta,index) => <PropsPergunta perguntas={pergunta} key={index} numero={index} />)}
               </div>
               <footer>
                    <p>O/4 CONCLUIDOS</p>
               </footer>
            </div>
        </>
    )
}
