import { Link } from 'react-router-dom';
import videos from "./data/db.json";

const Lancers = () => {
    return (
        <div className="Lancers">
            <div className="Front-Panel">
                <h1>Lancers</h1>
                <h3>Nos vidéos sur le sujet:</h3>
                <div className="filtres">
                    <form action="/lavantagedelaglace/lancers">
                        <div className="filtre">
                            <label for="poignet">Lancer du poignet</label>
                            <input type="checkbox" id="poignet" name="poignet" value="poignet"></input>
                        </div>
                        <div className="filtre">
                            <label for="frappe">Lancer frappé</label>
                            <input type="checkbox" id="frappe" name="frappe" value="frappe"></input>
                        </div>
                        <div className="filtre">
                            <label for="revers">Lancer du revers</label>
                            <input type="checkbox" id="revers" name="revers" value="revers"></input>
                        </div>
                        <div className="filtre">
                            <label for="lancer-puissance">Puissance</label>
                            <input type="checkbox" id="lancer-puissance" name="lancer-puissance" value="lancer-puissance"></input>
                        </div>
                        <div className="filtre">
                            <label for="precision">Précision</label>
                            <input type="checkbox" id="precision" name="precision" value="precision"></input>
                        </div>

                        <input type="submit" value="Filtrer" />
                    </form>
                </div>

                <div className="videos">
                    <div className='row'>
                        <Link to={"/lavantagedelaglace/video/" + videos[6].id} className="single-video-display">
                            <img src={videos[6]['thumbnail-url']} alt={videos[6].title} />
                            <h4>{videos[6].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[7].id} className="single-video-display">
                            <img src={videos[7]['thumbnail-url']} alt={videos[7].title} />
                            <h4>{videos[7].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[8].id} className="single-video-display">
                            <img src={videos[8]['thumbnail-url']} alt={videos[8].title} />
                            <h4>{videos[8].title}</h4>
                        </Link>
                    </div>
                    <div className='row'>
                    <Link to={"/lavantagedelaglace/video/" + videos[9].id} className="single-video-display">
                            <img src={videos[9]['thumbnail-url']} alt={videos[9].title} />
                            <h4>{videos[9].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[10].id} className="single-video-display">
                            <img src={videos[10]['thumbnail-url']} alt={videos[10].title} />
                            <h4>{videos[10].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[11].id} className="single-video-display">
                            <img src={videos[11]['thumbnail-url']} alt={videos[11].title} />
                            <h4>{videos[11].title}</h4>
                        </Link>
                    </div>
                    
                    
                </div>

                <div className="pages">
                    <h3>Pages</h3>
                    <p>En développement...</p> 
                </div>
            </div>
        </div>
    );
}
 
export default Lancers;