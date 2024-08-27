import React from "react"
import './_banner.scss'

function Banner(props) {
    return (
        <>
    <div className="banner">
     
    <h1>{props.title}</h1>   
        <img className="banner-img" src={props.image} alt={props.altText} />            
        <p className="banner-text">{props.text}</p>
        
    </div>

        </>
    )
}

export default Banner