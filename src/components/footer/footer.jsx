import React from 'react'
/* import logofooter from '../../assets/images/LogoKasa-footer.png' */
import './_footer.scss'

function Footer() {
    return (
        // afficher un pied de page avec un logo et du texte
        <footer className='footer'>
            {/* <img src={logofooter} alt="Logo Kasa Footer"></img> */}
            <div className='copyright'>&copy; 2024 Portfolio. Made by Jean-René JAOUEN</div>
        </footer>
    )
}

export default Footer