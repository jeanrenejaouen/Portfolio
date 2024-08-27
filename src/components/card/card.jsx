import React from "react"
import './_card.scss'

function Card ({image, title, description}) {    
    
    return (
        // retourner une carte avec image, titre et description
        <div className="card">
            <div className="card_contentImg">
                <img className="card-Img" src={image} alt={title}/>
            </div>    
            <div className="card_contentText">
                <h3>
                    <p className="card-Title">{title}</p>
                </h3>     
                <p className="card-Description">{description}</p>                                 
            </div>           
              
        </div>
    )
}
  
  export default Card