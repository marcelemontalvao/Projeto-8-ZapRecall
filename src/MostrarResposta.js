import React from "react"

export default function MostrarResposta(props) {
    const [marcador, setMarcador] = React.useState(
        <div className="mostrar-pergunta">
                <p>{props.resposta}</p>
                <div className="botoes">
                    <button className="nao" onClick={Red} >Não lembrei</button>
                    <button className="quase" onClick={Orange}>Quase não lembrei</button>
                    <button className="zap" onClick={Green}>Zap!</button>
                </div>
            </div> )

function Red() {
    props.setContador(props.contador + 1)
    return (
        setMarcador(
            <div className="pergunta"  >
              <span className="font-red">Pergunta {props.numero}</span>
              <ion-icon style={{color: "red"}} name="close-circle"></ion-icon>
            </div>
          )
    )
}

function Orange() {
    props.setContador(props.contador + 1)
    return (
        setMarcador(
            <div className="pergunta" >
              <span className="font-orange">Pergunta {props.numero}</span>
              <ion-icon style={{color: "orange"}} name="help-circle"></ion-icon>
            </div>
          )
    )
}

function Green() {
    props.setContador(props.contador + 1)
    return (
        setMarcador(
            <div className="pergunta">
              <span className="font-green">Pergunta {props.numero}</span>
              <ion-icon style={{color: "green"}} name="close-circle"></ion-icon>
            </div>
          )
    )
} 
return (
        <>
        {marcador}
        </>
    )
}

