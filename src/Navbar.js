import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="logo" to="/lavantagedelaglace/">
                <h1>L'avantage de la glace</h1>
            </Link>
            <div className="links">
                <Link to="/lavantagedelaglace/patinage">Patinage</Link>
                <Link to="/lavantagedelaglace/lancers">Lancers</Link>
                <Link to="/lavantagedelaglace/maniement">Maniement</Link>
                <Link to="/lavantagedelaglace/strategies">Stratégies</Link>
                <Link to="/lavantagedelaglace/horsglace">Hors-Glace</Link>
                <Link className="button" to="/lavantagedelaglace/reserver">Réserver</Link>
                <Link className="button" to="/lavantagedelaglace/contact">Nous Contacter</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;