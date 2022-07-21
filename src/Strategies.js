import { Link } from 'react-router-dom';
import videos from "./data/db.json";

const Strategies = () => {
    return (
        <div className="Strategies">
            <div className="Front-Panel">
                <h1>Stratégies</h1>
                <h3>Nos vidéos sur le sujet:</h3>
                <div className="filtres">
                    <form action="/final-lavantagedelaglace/strategies">
                        <div className="filtre">
                            <label for="offensive">Stratégies offensives</label>
                            <input type="checkbox" id="offensive" name="offensive" value="offensive"></input>
                        </div>
                        <div className="filtre">
                            <label for="defensive">Stratégies défensives</label>
                            <input type="checkbox" id="defensive" name="defensive" value="defensive"></input>
                        </div>

                        <input type="submit" value="Filtrer" />
                    </form>
                </div>

                <div className="videos">
                    <div className='row'>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[18].id} className="single-video-display">
                            <img src={videos[18]['thumbnail-url']} alt={videos[18].title} />
                            <h4>{videos[18].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[19].id} className="single-video-display">
                            <img src={videos[19]['thumbnail-url']} alt={videos[19].title} />
                            <h4>{videos[19].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[20].id} className="single-video-display">
                            <img src={videos[20]['thumbnail-url']} alt={videos[20].title} />
                            <h4>{videos[20].title}</h4>
                        </Link>
                    </div>
                    <div className='row'>
                    <Link to={"/final-lavantagedelaglace/video/" + videos[21].id} className="single-video-display">
                            <img src={videos[21]['thumbnail-url']} alt={videos[21].title} />
                            <h4>{videos[21].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[22].id} className="single-video-display">
                            <img src={videos[22]['thumbnail-url']} alt={videos[22].title} />
                            <h4>{videos[22].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[23].id} className="single-video-display">
                            <img src={videos[23]['thumbnail-url']} alt={videos[23].title} />
                            <h4>{videos[23].title}</h4>
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
 
export default Strategies;