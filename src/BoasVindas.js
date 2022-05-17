import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';

export default function BoasVindas(props) {
    return (
        <div className='boas-vindas'>
            <img src={logo} alt='logo' />
            <p>ZapRecall</p>
            <Link to='/perguntas'>
                <button>Iniciar Recall</button>
            </Link>
        </div>
    );
}
