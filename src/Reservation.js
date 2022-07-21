import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const Reservation = () => {

    const [values, setValues] = useState({
        arena:"Robinson",
        date:"",
        heure:"8h",
        nom:"",
        email:""
    })

    const [appearance, setAppearance] = useState(false)

    const closeConfirmation = (e)=>{
        setAppearance(false)
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        setAppearance(true)
    }

    const onChange = (e)=>{
        setValues({ ...values, [e.target.name]: e.target.value})
    }

    const [dateFocused, setDateFocused] = useState(false)
    const [nomFocused, setNomFocused] = useState(false)
    const [emailFocused, setEmailFocused] = useState(false)

    const handleFocus = (e) => {
        let name = e.target.name
        if(name === "date"){
            setDateFocused(true)
        } else if(name === "nom"){
            setNomFocused(true)
        } else if(name ==="email"){
            setEmailFocused(true)
        }
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };



    return (
        <div className="reservation">
            <div className="Front-Panel">
                <h1>Réserver</h1>
                <h3>Planifier un entraînement avec nous</h3>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="arena">Choisir une aréna</label>
                    <select name="arena" id="arena" value={values["arena"]} onChange={onChange}>
                        <option value="Robinson">Robinson</option>
                        <option value="Duchesnay">Duchesnay</option>
                        <option value="Sabourin">Sabourin</option>
                        <option value="Cholette">Cholette</option>
                        <option value="Branchaud-Brière">Branchaud-Brière</option>
                        <option value="Slush-Puppy">Slush Puppy</option>
                    </select>

                    <label htmlFor="date">Choisir une date</label>
                    <input name="date" type="date" id="date" value={values["date"]} onChange={onChange} required="true" onBlur={handleFocus} focused={dateFocused.toString()} min={disablePastDate()} />
                    <span id="s1">Veuillez choisir une date valide</span>

                    <label htmlFor="heure">Choisir une heure</label>
                    <select name="heure" id="heure" value={values["heure"]} onChange={onChange}>
                        <option value="8h">8h</option>
                        <option value="9h">9h</option>
                        <option value="10h">10h</option>
                        <option value="11h">11h</option>
                        <option value="12h">12h</option>
                        <option value="13h">13h</option>
                        <option value="14h">14h</option>
                        <option value="15h">15h</option>
                        <option value="16h">16h</option>
                        <option value="17h">17h</option>
                    </select>

                    <label htmlFor="nom">Votre nom</label>
                    <input name="nom" type="text" id="nom" placeholder="John Nobody" value={values["nom"]} onChange={onChange} required="true" pattern="^[a-zA-ZéÉèÈêÊëËïÏ'-]+[ a-zA-ZéÉèÈêÊëËïÏ'-]*$" onBlur={handleFocus} focused={nomFocused.toString()}/>
                    <span id="s2">Votre nom ne peut être vide, ne peut commencer par un espace et ne doit contenir que des lettres valides</span>

                    <label htmlFor="email">Votre adresse courriel</label>
                    <input name="email" type="email" id="email" placeholder="exemple@email.com" value={values["email"]} onChange={onChange} required="true" onBlur={handleFocus} focused={emailFocused.toString()}/>
                    <span id="s3">Veuillez entrer une adresse courriel valide</span>

                    <button type="submit" id="confirmer">Confirmer</button>

                </form>
            </div>

            <div className="confirmation" appearance={appearance.toString()}>
                <h3>Confirmation</h3>
                <p> Une réservation à l'aréna {values.arena} au nom de {values.nom} a été prise pour le {values.date} à {values.heure}. Un courriel de confirmation sera envoyé au {values.email}. Merci! </p>
                <button onClick={closeConfirmation}>OK</button>
            </div>

            <div className="confirmation-overlay"></div>
        </div>
    );
}
 
export default Reservation;