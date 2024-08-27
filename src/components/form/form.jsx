import React from 'react';
import { useForm } from 'react-hook-form';
import './form.scss';

/* import { yupResolver } from '@hookform/resolvers/yup'; */
/* importer tout yup (* as yup) */
/* import * as yup from 'yup'; */

function Form() {
  // Utilisation de useForm pour gérer le formulaire
  /* const { register, handleSubmit, formState: { errors }, setError, reset } = useForm(); */
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); 
  
  

  // Fonction de soumission du formulaire
  const onSubmit = data => {
    console.log(data); // Affichage des données du formulaire dans la console    
  };

  // Fonction pour réinitialiser le formulaire
  const onReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div>
            <label>Nom :</label>
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
            <label>Prénom :</label>
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
            <label>Email :</label>
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