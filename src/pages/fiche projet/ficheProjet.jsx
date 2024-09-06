import React from "react"
import Banner from '../../components/banner/banner.jsx'
import ProjetAssignment from '../../components/Passignment/Passignment.jsx'
import ProjetContext from '../../components/Pcontext/Pcontext.jsx'
import ProjetRessources from '../../components/Pressources/Pressources.jsx'
/* import ProjetSkillsAssessed from '../../components/PskillsAssessed/PskillsAssessed.jsx' */
import ProjetSkills from '../../components/Pskills/Pskills.jsx'
import AccueilImage from '../../assets/images/imgBanner.webp'
import { useParams } from 'react-router-dom'
import Error from '../../pages/error/error.jsx'
import './_ficheProjet.scss'
import { useEffect } from 'react';

/* Ne pas utiliser de fetch pour récupérer les données du fichier json */
/* Car les données seraient utilisées avant d'être disponible */
/* Cela affiche brièvement une page d'erreur */
/* import { useFetchData } from "../../hookFetch/useFetchData.js" */
import Projets from '../../fiches-projet.json'


/* import CardSkill from "../../components/cardskill/cardskill.jsx" */
/* import Competences from '../../components/competences/competences.jsx' */

/* import Gallery from '../../components/gallery/gallery.jsx' */


function FicheProjet() {
/* Le useEffect permet de faire défiler la page au début */
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  /* const Projets = useFetchData(`/fiches-projet.json`)  */ 
    
  // Récupérer l'identifiant du projet actuel
  const idProjet = useParams("id").id
  
  console.log(Projets);
  // inclure dans un tableau "currentProjet" uniquement le projet avec l'identifiant récupéré ci-dessus 
  const currentProjet = Projets.filter(item => item.id === idProjet);
  

  // si aucun projet dans la table "currentProjet", appelez le composant "Error"
  if (currentProjet.length === 0) {
      return (
          <Error />
      )
  }
 

  return (
      <>   
        {/* Afficher 'imgBanner.webp' nommée 'AccueilImage' provenant du fichier image pour avoir la même
        image de fond que sur la bannière de la page d'accueil*/}
        {/* Afficher le titre du projet courant */}
        {/* Afficher le sous-titre du projet courant */}
        <Banner  image={AccueilImage} altText="Banner" 
        title={currentProjet[0].title} 
        text={currentProjet[0].subtitle}/>         
        <div className="pA">
          <div className="projet-btn">   
            {/* target="_blank": Cet attribut ouvre le lien dans un nouvel onglet.
            rel="noopener noreferrer": Cet attribut est recommandé pour des raisons de sécurité et de performance.
            noopener empêche la nouvelle page d'accéder à l'objet window de la page d'origine, et noreferrer empêche 
            l'envoi du référent HTTP. 
            De plus, Ligne 68 le lien ne sera rendu que si currentProjet[0].github existe et n'est pas une chaîne vide*/}                         
              {currentProjet[0].github && currentProjet[0].github !== '' && (
                <a className="btn" href={currentProjet[0].github} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              )}
              {currentProjet[0].website && currentProjet[0].website !== '' && (
                <a className="btn" href={currentProjet[0].website} target="_blank" rel="noopener noreferrer">
                  Site web
                </a>
              )}
              {/* Ajout d'un fichier pdf sur le repository avec Upload files
              Une fois le fichier sélectionné, cliquez sur "Commit changes" pour l'ajouter au dépôt
              Déployer le dépot sur github page
              Ajouter le nom du pdf à l'url de dépot pour accès direct au pdf (voir fiches-projet.json) */}  
              {currentProjet[0].pdf && currentProjet[0].pdf !== '' && (
                <a className="btn" href={currentProjet[0].pdf} target="_blank" rel="noopener noreferrer">
                  {/* Ci-dessous utilisation de pdfName du fichier json pour customiser le nom du bouton */}
                  {currentProjet[0].pdfName}
                </a>
              )}
              {currentProjet[0].pdf2 && currentProjet[0].pdf2 !== '' && (
                <a className="btn" href={currentProjet[0].pdf2} target="_blank" rel="noopener noreferrer">
                  {/* Ci-dessous utilisation de pdfName du fichier json pour customiser le nom du bouton */}
                  {currentProjet[0].pdfName2}
                </a>
              )}
              {currentProjet[0].pdf3 && currentProjet[0].pdf3 !== '' && (
                <a className="btn" href={currentProjet[0].pdf3} target="_blank" rel="noopener noreferrer">
                  {/* Ci-dessous utilisation de pdfName du fichier json pour customiser le nom du bouton */}
                  {currentProjet[0].pdfName3}
                </a>
              )}
              {currentProjet[0].pdf4 && currentProjet[0].pdf4 !== '' && (
                <a className="btn" href={currentProjet[0].pdf4} target="_blank" rel="noopener noreferrer">
                  {/* Ci-dessous utilisation de pdfName du fichier json pour customiser le nom du bouton */}
                  {currentProjet[0].pdfName4}
                </a>
              )}
            {/* <a href={currentProjet[0].website} target="_blank" rel="noopener noreferrer">Site</a>  */}          
          </div>
            <h2>Contexte</h2>            
              <ProjetContext context={currentProjet[0].context} />            
            <h2>Mission réalisée</h2>                                   
              <ProjetAssignment assignment={currentProjet[0].assignments.map((assignment, index) => (
                  <li key={index}>{assignment}</li>
              ))} />  
                                        
            <h2>Ressources</h2>
              <ProjetRessources ressources={currentProjet[0].ressources.map((ressources, index) => (
                  <li key={index}>{ressources}</li>
              ))} />
            {/* <h2>Compétences évaluées</h2>
              <ProjetSkillsAssessed skillsAssessed={currentProjet[0].skillsAssessed.map((skillsAssessed, index) => (
                  <li key={index}>{skillsAssessed}</li>
              ))} /> */}
            <h2>Outils utilisés</h2>  
              <ProjetSkills skills={currentProjet[0].skills.map((skills, index) => (
                  <li key={index}>{skills}</li>
              ))} />  

          <div className="projet-btn">
            <a className="btn" href="#">Retour</a> 
          </div>                
        </div>
        
      </>
      
    )}
  
  export default FicheProjet

  