import React from 'react'
import {Link} from 'react-router-dom'
import PhotoProfil from '../../assets/images/photo-profil.png'
import './_header.scss'

function Header() {
    return (
      // afficher un <header> comprenant un logo et une barre de navigation     

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
            <a href="/#competences" aria-label="Aller à Compétences">Compétences</a>
            </li>
            <li>
              <a href="/#a-propos" aria-label="Aller à A propos">A Propos</a>
            </li>
            <li>
              <a href="/#projets" aria-label="Aller à Projets">Projets</a>
            </li>
            <li>
              <a href="/#contact" aria-label="Aller à Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header