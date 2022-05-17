import React from 'react';

export default function MostrarResposta(props) {
    const [estaRespondido, setEstaRespondido] = React.useState(false);
    const [icon, setIcon] = React.useState();
    const [color, setColor] = React.useState();

    function responderFlashCard(cor, icone) {
        props.setContador(props.contador + 1);
        props.setIcones([...props.icones, { icone, cor }]);
        setEstaRespondido(true);
        setIcon(icone);
        setColor(cor);
    }

    return (
        <>
            {estaRespondido ? (
                <div className='pergunta'>
                    <span className={`font-${color}`}>Pergunta {props.numero}</span>
                    <ion-icon style={{ color: color }} name={icon}></ion-icon>
                </div>
            ) : (
                <div className='mostrar-pergunta'>
                    <p>{props.resposta}</p>
                    <div className='botoes'>
                        <button
                            className='nao'
                            onClick={() => responderFlashCard('red', 'close-circle')}>
                            Não lembrei
                        </button>
                        <button
                            className='quase'
                            onClick={() => responderFlashCard('orange', 'help-circle')}>
                            Quase não lembrei
                        </button>
                        <button
                            className='zap'
                            onClick={() =>
                                responderFlashCard('green', 'checkmark-circle')
                            }>
                            Zap!
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
