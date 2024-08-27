import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../pages/accueil/accueil.jsx'

import FicheProjet from '../pages/fiche projet/ficheProjet.jsx'
import Error from '../pages/error/error.jsx'
import Header from './header/header'
import Footer from './footer/footer'



function Router() {
    return (
         
        <BrowserRouter>       
               
            <Header/>
            
            <main>             
                <Routes>                    
                    <Route path="/" element={<Accueil />} />                                      
                    <Route path="/ficheProjet/:id" element={<FicheProjet />} />                   
                    <Route path="*" element={<Error />} />                                                       
                </Routes> 
            </main>
            <Footer/> 
                  
        </BrowserRouter>
    )
}

export default Router