import React from "react";
import  Form  from "../form/form.jsx";

import './_contact.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {

    return (
      <>
          <Form /> 

          <div className="blocIcon">
            <p>Ou ...</p>
          </div>
                    
          <div className="blocIcon">
            <p>Envoyez-moi un email</p>
            <a href="mailto:jeanrenejaouen29@gmail.com">            
              <FontAwesomeIcon icon={faEnvelope} className="custom-icon" size= "2x" />
            </a>
          </div>  
      </>
      )
    }
    
    export default Contact