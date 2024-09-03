import React from "react";

import CardSkill from '../cardskill/cardskill.jsx'
import './_competences.scss'
import Skills from '../skills-data.json'

function Competences() {

     
  return (
    <div className="comp">
        {Skills.map((skill) => ( 
             <>  
                <article key={skill.id}>                       
                    <CardSkill image={skill.picture} title={skill.title} />  
                </article> 

               
            </> 
        ))}

    </div>
);
};

export default Competences