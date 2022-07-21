import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="logo" to="/final-lavantagedelaglace/">
                <h1>L'avantage de la glace</h1>
            </Link>
            <div className="links">
                <Link to="/final-lavantagedelaglace/patinage">Patinage</Link>
                <Link to="/final-lavantagedelaglace/lancers">Lancers</Link>
                <Link to="/final-lavantagedelaglace/maniement">Maniement</Link>
                <Link to="/final-lavantagedelaglace/strategies">Stratégies</Link>
                <Link to="/final-lavantagedelaglace/horsglace">Hors-Glace</Link>
                <Link className="button" to="/final-lavantagedelaglace/reserver">Réserver</Link>
                <Link className="button" to="/final-lavantagedelaglace/contact">Nous Contacter</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;