import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <div className="Front-Panel">
                <h1>L'avantage de la glace</h1>
                <p>Notre mission est de fournir à tous les joueurs de hockey un accès aux ressources nécessaires pour qu'ils atteignent leur plein potentiel en tant qu'athlètes. Ainsi, vous retrouverez sur ce site une multitudes de vidéos éducatives sur toutes les facettes du hockey. De plus, si vous êtes dans la région de Gatineau-Ottawa, vous avez la chance de pouvoir réserver une séance d'entraînement sur la glace avec notre équipe d'entraîneurs passionnés!</p>
                <h3>Découvrez nos vidéos sur les sujets suivants:</h3>
                <div className="links">
                    <div className="row">
                        <Link to="/lavantagedelaglace/patinage">Patinage</Link>
                        <Link to="/lavantagedelaglace/lancers">Lancers</Link>
                    </div>
                    <div className="row">
                        <Link to="/lavantagedelaglace/maniement">Maniement</Link>
                        <Link to="/lavantagedelaglace/strategies">Stratégies</Link>
                    </div>
                    <div className="row">
                    <Link to="/lavantagedelaglace/horsglace">Hors-Glace</Link>
                    </div>
                </div>
                <h3 className="second-sub">Prenez rendez-vous avec nos entraîneurs:</h3>
                <Link to="/lavantagedelaglace/reserver" className='reserver'>Réserver</Link>
            </div>
        </div>
    );
}
 
export default Home;