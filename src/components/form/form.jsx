import React from 'react';
import { useForm } from 'react-hook-form';
import './form.scss';
import emailjs from '@emailjs/browser'

/* import { yupResolver } from '@hookform/resolvers/yup'; */
/* importer tout yup (* as yup) */
/* import * as yup from 'yup'; */

function Form() {

  /* Configuration du formulaire */ 
  const { register, handleSubmit, formState: { errors }, reset } = useForm();  
  /*
    useForm : C'est un hook de react-hook-form qui permet de gérer facilement l'état des formulaires.
    register : Permet d'enregistrer les champs du formulaire.
    handleSubmit : Fonction qui gère la soumission du formulaire.
    errors : Un objet qui contiendra les erreurs de validation des champs du formulaire.
    reset : Fonction qui permet de réinitialiser le formulaire.
*/

  // Fonction de soumission du formulaire  
  const onSubmit = (data, r) => {
    alert("Merci pour votre message, il sera traité au plus vite");
    const templateId = "template_2ht0r5g";
    const serviceId = "service_d9jqii3";    

    sendFeedback(serviceId, templateId, {
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
      message: data.message,
      reply_to: r.target.reset(),
    });
    /* 
    onSubmit : Fonction qui est appelée lors de la soumission du formulaire. Elle prend en paramètres les données du formulaire (data)
    et éventuellement un évènement (r).
    alert : Affiche un message à l'utilisateur après l'envoi du formulaire.
    Les variables templateId et serviceId sont utilisées par EmailJS pour identifier le modèle de l'e-mail et le service d'envoi 
    respectifs.
    sendFeedback est appelée pour envoyer l'email en utilisant les données du formulaire.
  */
     
  };
  /* Envoi de Feedback */
  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
    .send(serviceId, templateId, variables, 'wGh1MsOkbBjUNqVuh')
    .then((res) => {
      console.log ('success');
    })
    .catch((err) => console.error ('oups'));
  }  
  /* 
    Cette fonction utilise la bibliothèque EmailJS pour envoyer l'email.
    Les paramètres nécessaires pour l'envoi (serviceId, templateId et variables) sont passés.
    En cas de succès, elle logge "success" dans la console, sinon elle logge une erreur.
  */

  // Fonction pour réinitialiser le formulaire
  const onReset = () => {
    reset();
  };
  /* La fonction onReset appelle reset() pour réinitialiser tous les champs du formulaire à leur état initial. */

  /* Structure du formulaire */
  /* 
    Le formulaire utilise handleSubmit(onSubmit) pour gérer les soumissions.
    Des champs tels que le nom, le prénom, l'email, et un message sont créés avec des validations, affichant des messages d'erreur 
    en cas de problème.
    Il y a également un bouton pour soumettre le formulaire (Ligne 124) et un autre pour réinitialiser les champs (Ligne 125).
  */
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div>
            <label for="lastName">Nom :</label>
            <input
            type="text"
            className="medium-input"
            id="lastName"
            name="lastName"
            {...register("lastName", { required: 'Ce champ est requis' })}
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div>
            <label for="firstName">Prénom :</label>
            <input
            type="text"
            className="medium-input"
            id="firstName"
            name="firstName"
            {...register("firstName", { required: 'Ce champ est requis' })}
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
       
        <div>
            <label for="email">Email :</label>
            <input
            type="email"
            className="long-input"
            id="email"
            name="email"
            {...register("email", { 
                required: 'Ce champ est requis', 
                pattern: {
                value: /^\S+@\S+$/i,
                message: 'Adresse email invalide'
                }
        
            })}
            />
            {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
            <label>Message :</label>
            <textarea           
            className="medium-input" title="message" id="message" cols="30" rows="10" {...register("message")} ></textarea>          
        </div>
        
        <div>
            <input type="submit" value="Envoyer" />
            <button type="button" onClick={onReset}>Réinitialiser</button>
        </div>
    </form>
  );
}

export default Form;