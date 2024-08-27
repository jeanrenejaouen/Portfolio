import React from "react"
import Banner from '../../components/banner/banner.jsx'
import Competences from '../../components/competences/competences.jsx'
import AccueilImage from '../../assets/images/imgBanner.png'
import Gallery from "../../components/gallery/gallery.jsx"
import APropos from '../../components/a-propos/a-propos.jsx'
import Contact from "../../components/contact/contact.jsx"
import './_accueil.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


function Accueil() {
  
  return (
    <>
        <Banner image={AccueilImage} altText="Banner" title="BIENVENUE SUR MON PORTFOLIO" text="Je suis développeur web front-end junior" />
        
          <h2 id="competences">MES COMPETENCES          
            <a href= "#" title="RETOUR"> 
              <FontAwesomeIcon icon={faHouse} className="custom-icon" />
            </a>
          </h2>
          <Competences />
                 
          <h2 id="a-propos">A PROPOS DE MOI
            <a href= "#" title="RETOUR">  
              <FontAwesomeIcon icon={faHouse} className="custom-icon" />
            </a>
          </h2>
          <APropos />
        
          <h2 id="projets">PROJETS REALISES
            <a href= "#" title="RETOUR">
              <FontAwesomeIcon icon={faHouse} className="custom-icon" />
            </a> 
          </h2>
            <Gallery />            
               
          <h2 id="contact">CONTACT
            <a href= "#" title="RETOUR">
              <FontAwesomeIcon icon={faHouse} className="custom-icon" /> 
            </a>
          </h2>
          <Contact />
        
    </>
    )
  }
  
  export default Accueil