import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import videos from "./data/db.json"
import { Link } from "react-router-dom";

const VideoPlayer = () => {
    const { id } = useParams();

    let previousId = (id-1) % 31
    let nextId = (+id + +1) % 31

    if(previousId === 0){
        previousId = 30
    }

    if(nextId === 0) {
        nextId = 1
    }

    const previous = "/final-lavantagedelaglace/video/" + previousId
    const next = "/final-lavantagedelaglace/video/" + nextId
    
    return (
        <div className="video-player">
            <div className="Front-Panel">
                <div className="navigation">
                    <Link className="fa fa-arrow-left"  to= {previous} />
                    <Link className="fa fa-arrow-right"  to= {next} />
                </div>
                <h1> {videos[id-1].title} </h1>
                <div className="video">
                    <ReactPlayer controls url= {videos[id-1]["vid-url"]} />
                </div>
                <p> {videos[id-1]["description"]} </p>
                
            </div>
            
        </div>
    );
}
 
export default VideoPlayer;