//  import React from "react"

//  function Pergunta (props) {
//      return (
//          <>
//              <p>{props.pergunta.Title}</p>
//              <img src={process.env.PUBLIC_URL + "/assets/setinha.png"} alt="setinha" />
//          </>
//      )
//  }

//  export default function MostrarPergunta() {
//      const objQuestion = [
//          {
//              Title: 'O que é JSX?' ,
//              Answer: 'Uma extensão de linguagem do JavaScript'},
//          {
//              Title: 'O React é __',
//              Answer: 'uma biblioteca JavaScript para construção de interfaces'},
//          {
//              Title: 'Componentes devem iniciar com __',
//              Answer: 'letra maiúscula'},
//          {
//              Title: 'O ReactDOM nos ajuda __ ',
//              Answer: 'interagindo com a DOM para colocar componentes React na mesma'},
//          {
//              Title: 'Usamos o npm para __ ',
//              Answer: 'gerenciar os pacotes necessários e suas dependências'},
//          {
//              Title: 'Podemos colocar __ dentro do JSX',
//              Answer: 'expressões'},
//          {
//              Title: 'Usamos props para __',
//              Answer: 'passar diferentes informações para componentes '},
//          {
//              Title: 'Usamos estado (state) para __',
//              Answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
//      ]

//      return (
//          <>
//              <div className="mostrar-pergunta">
//                     {objQuestion.map(title => <Pergunta pergunta={title}/>)}
//              </div>
//          </>
//      )    
//  }