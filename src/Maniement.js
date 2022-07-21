import { Link } from 'react-router-dom';
import videos from "./data/db.json";

const Maniement = () => {
    return (
        <div className="Maniement">
            <div className="Front-Panel">
                <h1>Maniement</h1>
                <h3>Nos vidéos sur le sujet:</h3>
                <div className="filtres">
                    <form action="/final-lavantagedelaglace/maniement">
                        <div className="filtre">
                            <label for="feinte">Feinte</label>
                            <input type="checkbox" id="feinte" name="feinte" value="feinte"></input>
                        </div>
                        <div className="filtre">
                            <label for="passes">Passes</label>
                            <input type="checkbox" id="passes" name="passes" value="passes"></input>
                        </div>
                        <div className="filtre">
                            <label for="saucer">Passes soulevées</label>
                            <input type="checkbox" id="saucer" name="saucer" value="saucer"></input>
                        </div>

                        <input type="submit" value="Filtrer" />
                    </form>
                </div>

                <div className="videos">
                    <div className='row'>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[12].id} className="single-video-display">
                            <img src={videos[12]['thumbnail-url']} alt={videos[12].title} />
                            <h4>{videos[12].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[13].id} className="single-video-display">
                            <img src={videos[13]['thumbnail-url']} alt={videos[13].title} />
                            <h4>{videos[13].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[14].id} className="single-video-display">
                            <img src={videos[14]['thumbnail-url']} alt={videos[14].title} />
                            <h4>{videos[14].title}</h4>
                        </Link>
                    </div>
                    <div className='row'>
                    <Link to={"/final-lavantagedelaglace/video/" + videos[15].id} className="single-video-display">
                            <img src={videos[15]['thumbnail-url']} alt={videos[15].title} />
                            <h4>{videos[15].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[16].id} className="single-video-display">
                            <img src={videos[16]['thumbnail-url']} alt={videos[16].title} />
                            <h4>{videos[16].title}</h4>
                        </Link>
                        <Link to={"/final-lavantagedelaglace/video/" + videos[17].id} className="single-video-display">
                            <img src={videos[17]['thumbnail-url']} alt={videos[17].title} />
                            <h4>{videos[17].title}</h4>
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
 
export default Maniement;