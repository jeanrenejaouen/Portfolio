import React from "react"
import './_cardskill.scss'

function CardSkill ({image, title}) {    
    
    return (
        // retourner une carte de compétence avec image et titre
        <div className="cardskill">
            <div className="cardskill_contentImg">
                <img className="cardskill-Img" src={image} alt={title}/>
            </div>    
            <div className="cardskill_contentText">
                <h3>
                    <p className="cardskill-Title">{title}</p>
                </h3>     
                                                 
            </div>           
              
        </div>
    )
}
  
  export default CardSkill