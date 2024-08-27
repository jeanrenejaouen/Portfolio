import React from "react"
import './_cardskill.scss'

function CardSkill ({image, title}) {    
    
    return (
        // retourner une carte avec image, titre et description
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