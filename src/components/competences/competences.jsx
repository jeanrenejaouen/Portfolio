import React from "react";

import CardSkill from '../cardskill/cardskill.jsx'
import './_competences.scss'
import Skills from '../skills-data.json'

/* Erreur console : Warning: Each child in a list should have a unique "key" prop.
    Remplacer contenu Ligne 15 à 21
    Par contenu Ligne 25 à 31 */

function Competences() {
     
  return (
    <div className="comp">

        {/* {Skills.map ((skill) => (               
                    <>    
                        <article key={skill.id}>                       
                            <CardSkill image={skill.picture} title={skill.title} />  
                        </article>                       
                    </>
            ))} */}


        {Skills.map ((skill, index) => (               
                 
                    <article key={index}>                       
                        <CardSkill image={skill.picture} title={skill.title} />  
                    </article>                       
            
        ))}

    </div>
);
};

export default Competences