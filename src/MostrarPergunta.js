import React from 'react';
import MostrarResposta from './MostrarResposta';
import setinha from '../src/assets/setinha.png';

export default function MostrarPergunta(props) {
    const [resposta, setResposta] = React.useState(false);
    return (
        <>
            {resposta === false ? (
                <div className='mostrar-pergunta'>
                    <p>{props.pergunta}</p>
                    <img src={setinha} alt='setinha' onClick={() => setResposta(true)} />
                </div>
            ) : (
                <MostrarResposta
                    resposta={props.resposta}
                    numero={props.numero}
                    contador={props.contador}
                    setContador={props.setContador}
                    icones={props.icones}
                    setIcones={props.setIcones}
                />
            )}
        </>
    );
}
