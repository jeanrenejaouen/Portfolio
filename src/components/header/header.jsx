import React from 'react'
// NavLink est similaire à Link, mais avec la possibilité d'ajouter des attributs de style supplémentaires à l'élément
import {Link} from 'react-router-dom'
import PhotoProfil from '../../assets/images/photo-profil.png'
import './_header.scss'

function Header() {
    return (
      // afficher un <header> comprenant un logo et une barre de navigation
      //  avec 2 liens vers les pages "A propos" et "Accueil".
      

      <header className="header">
        <div className="header-content">            
            <Link to="/">
                <div className="header-photoProfil-name">
                    <div className="header-photoProfil">
                        <img className="header-photoProfil-img" src={PhotoProfil} alt="photodeprofil"></img>
                    </div>                
                    <span className="header-name">Jean-René JAOUEN</span>
                </div>
            </Link>    
        </div>

        <nav>
          <ul className="nav">
          <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
            {/* <Link to="#competences">Compétences</Link> */}
            {/* <Link to="#competences">Compétences</Link> */}
            <a href="/#competences">Compétences</a>
            </li>
            <li>
              <a href="/#a-propos">A Propos</a>
            </li>
            <li>
              <a href="/#projets">Projets</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header