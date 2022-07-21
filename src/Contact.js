import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [comments, setComments] = useState([
        {
            author: "Félix",
            content: "Grâce à l'Avantage de la glace, j'ai grandement amélioré mon lancer frappé! Je recommande fortement cette plateforme!",
            id:0
        },
        {
            author: "Camille",
            content: "J'ai adoré les vidéos d'entraînement hors-glace, puisque je n'est pas souvent la chance d'aller sur la patinoire. Ces exercices me permettent de garder la forme et de m'améliorer tout en restant à la maison.",
            id:1
        }
    ])

    const [newComment, setNewComment] = useState({
        author: "",
        content: "",
        id: ""
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        newComment["id"] = comments.length
        setComments(oldComments => [...oldComments, newComment])
        setFocused(false)
        setNewComment({
            author: "",
            content: "",
            id: ""
        })
    }

    const onChange = (e)=>{
        setNewComment({ ...newComment, [e.target.name]: e.target.value})
    }

    const [focused, setFocused] = useState(false)

    const handleFocus = (e) => {
        setFocused(true)
    }



    return (
        <div className="Contact">
            <div className="Front-Panel">
                <h1>Nous contacter</h1>
                <h3>Suivez-nous sur les médias sociaux</h3>
                <div className="liens">
                    <Link to="/final-lavantagedelaglace/contact" className="fa fa-facebook"></Link>
                    <Link to="/final-lavantagedelaglace/contact" className="fa fa-youtube"></Link>
                    <Link to="/final-lavantagedelaglace/contact" className="fa fa-instagram"></Link>
                </div>

                <h3>Envoyez-nous un courriel</h3>
                <h4>lavantagedelaglace@gmail.com</h4>

                <h3>Laissez-nous un commentaire</h3>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="author" placeholder="Votre nom" onChange={onChange} required="true" pattern="^[a-zA-ZéÉèÈêÊëËïÏ'-]+[ a-zA-ZéÉèÈêÊëËïÏ'-]*$" value={newComment["author"]} onBlur={handleFocus} focused={focused.toString()}/>
                    <span>Votre nom ne peut être vide, ne peut commencer par un espace et ne doit contenir que des lettres valides</span>
                    <textarea name="content" id="" cols="80" rows="10" onChange={onChange} required="true" value={newComment["content"]}></textarea>
                    <button>Publier</button>
                </form>

                <div className="commentaires">
                    {comments.map((comment) => (
                        <div key={comment.id} className="commentaire">
                            <h3>{comment.author}</h3>
                            <p> {comment.content} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Contact;