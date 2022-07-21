import { Link } from 'react-router-dom';
import videos from "./data/db.json";

const HorsGlace = () => {
    return (
        <div className="HorsGlace">
            <div className="Front-Panel">
                <h1>Hors-glace</h1>
                <h3>Nos vidéos sur le sujet:</h3>
                <div className="filtres">
                    <form action="/lavantagedelaglace/horsglace">
                        <div className="filtre">
                            <label for="hg-puissance">Puissance</label>
                            <input type="checkbox" id="hg-puissance" name="hg-puissance" value="hg-puissance"></input>
                        </div>
                        <div className="filtre">
                            <label for="explosivite">Explosivité</label>
                            <input type="checkbox" id="explosivite" name="explosivite" value="explosivite"></input>
                        </div>
                        <div className="filtre">
                            <label for="endurance">Endurance</label>
                            <input type="checkbox" id="endurance" name="endurance" value="endurance"></input>
                        </div>
                        <div className="filtre">
                            <label for="agilite">Agilité</label>
                            <input type="checkbox" id="agilite" name="agilite" value="agilite"></input>
                        </div>

                        <input type="submit" value="Filtrer" />
                    </form>
                </div>

                <div className="videos">
                    <div className='row'>
                        <Link to={"/lavantagedelaglace/video/" + videos[24].id} className="single-video-display">
                            <img src={videos[24]['thumbnail-url']} alt={videos[24].title} />
                            <h4>{videos[24].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[25].id} className="single-video-display">
                            <img src={videos[25]['thumbnail-url']} alt={videos[25].title} />
                            <h4>{videos[25].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[26].id} className="single-video-display">
                            <img src={videos[26]['thumbnail-url']} alt={videos[26].title} />
                            <h4>{videos[26].title}</h4>
                        </Link>
                    </div>
                    <div className='row'>
                    <Link to={"/lavantagedelaglace/video/" + videos[27].id} className="single-video-display">
                            <img src={videos[27]['thumbnail-url']} alt={videos[27].title} />
                            <h4>{videos[27].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[28].id} className="single-video-display">
                            <img src={videos[28]['thumbnail-url']} alt={videos[28].title} />
                            <h4>{videos[28].title}</h4>
                        </Link>
                        <Link to={"/lavantagedelaglace/video/" + videos[29].id} className="single-video-display">
                            <img src={videos[29]['thumbnail-url']} alt={videos[29].title} />
                            <h4>{videos[29].title}</h4>
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
 
export default HorsGlace;