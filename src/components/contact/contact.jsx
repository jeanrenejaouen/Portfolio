import React from "react";
import  Form  from "../form/form.jsx";


import './_contact.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {

    return (
      <>
          <div className="blocIcon">
            <p>Parlez-moi de votre projet via le formulaire ci-dessous</p>
          </div>
          <Form /> 

          {/* <div className="blocIcon">
            <p>Ou ...</p>
          </div> */}
                    
          <div className="blocIcon">
            <p>Ou... Envoyez-moi un email</p>
            <a href="mailto:jeanrenejaouen29@gmail.com" aria-label="Me contacter par email">            
              <FontAwesomeIcon icon={faEnvelope} className="custom-icon" size= "2x" />
            </a>
          </div>  
      </>
      )
    }
    
    export default Contact