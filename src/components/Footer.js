import React from 'react';
import Footer_suit from './footer-suite';
import '../assets/css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png';
import { NavLink  } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import {FaFacebookF, FaTwitter,FaInstagram,FaTelegram,FaWhatsapp,FaLinkedinIn} from 'react-icons/fa';
import { BiShieldQuarter } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { TbPlayerTrackNext } from "react-icons/tb";

import Moment from 'moment';

function Footer () {

    const Year = Moment().format('Y');
   
    return(
        <div>
<Footer_suit />

<div className="wrapper container-Fluid">
    
  <div className="boite-tirets">Boîte avec tirets</div>
   <div className="boite-center container-Fluid">
    <div className='bloc_rejoin'>
    <h1 className='input-rejoint-footer'>Rejoingnez-nous maintenant !</h1><br/>
    <p className='footer-boite-p'>Abonnez-vous pour recevoir toutes les actualités<br/> financières en temps réel.</p>
    <form method='' action=''>
     <input type="text" name='' placeholder='Email' className='input-mail-footer'/><br/>
     <input type="submit" name='' className='input-btn-footer' value="Envoyer"/>
    </form>
    </div>
    </div> 
   <div class="boite-haut">
    

   <div class="container text-center container-haut">
  <div class="row">
    <div class="col">
    <BiShieldQuarter   className='icon-footer-haut' />
      <h1  className='footer-haut-h1'>Opérations sécurisée</h1>
      <p className='footer-haut-p1'>IFABIT protège les données transmises entre votre ordinateur et ses serveurs et met un accent sur la sécurité de vos données et de vos interactions.</p>
    </div>
    <div class="col order-2">
    <FiClock   className='icon-footer-haut' />
    <h1 className='footer-haut-h1'>Disponibilité 24h/24</h1>
    <p className='footer-haut-p1'>Nous nous assurons que le service reste disponible 24h/24 avec une equipe à votre écoute.</p>
    </div>
    <div class="col order-3">
    <TbPlayerTrackNext   className='icon-footer-haut' />
    <h1  className='footer-haut-h1'>Diversité et rapidité</h1>
    <p className='footer-haut-p1'>Avec IFABIT , vous avez accès à éventail de possibilités pouvant accélérer votre business.</p>
    </div>
  </div>
</div>



    </div> 
</div>
<hr className='footer-ligne' />


            <div className='container col-md-12 col-sm-12 py-5'>
                <div className='row footColor'>
                    <div className='col-lg-3 col-md-3 col-xl-3 mx-auto text-white'><br></br>
                        <img src={logo} className='img-fluid' />
                        <p className='footer-p'>IFABIT, est une plateforme qui se présente comme une révolution dans le domaine des plateformes de change internationales, est une Startup de l’une des entreprises pionnières du secteur financier en Afrique Francophone.</p>
                    </div>
                    <div className='col-lg-2 col-md-2 col-xl-2 mx-auto'>
                        <h2 className='text-capitalize font-weight-bold text-white footer-h' >Liens Utiles</h2><br></br>
                        <p className='footer-p'>
                            <a href='https://app.ifabit.com/' target='blank' className='footer-link'>Espace Client</a>
                        </p>
                        <p className='footer-p'>
                            <a href='https://app.ifabit.com/auth/signup' target='blank' className='footer-link' >S'inscrire</a>
                        </p>
                        <p className='footer-p'>
                            <NavLink to='/portefeuilles' className='footer-link'>IFA Wallets</NavLink>
                        </p>
                        <p className='footer-p'>
                            <NavLink to='/brokers' className='footer-link'>Brokers</NavLink>
                        </p>
                        <p className='footer-p'>
                            <NavLink to='/business' className='footer-link'>Offres Business</NavLink>
                        </p>
                    </div>
                    <div className='col-lg-2 col-md-3 col-xl-2'>
                        <h2 className='text-capitalize font-weight-bold text-white footer-h'>Légales</h2><br></br>
                        <p className='footer-p'>
                            <NavLink to='/#faq' className='footer-link'>FAQ</NavLink>
                        </p>
                        <p className='footer-p'>
                            <a href='https://app.ifabit.com/legal/cgu.htm' className='footer-link'>Conditions Générales d'utilisation</a>
                        </p>
                    </div>
                    <div className='col-lg-3 col-md-4 col-xl-3 mx-auto text-white'>
                        <h2  className='text-capitalize font-weight-bold footer-h'>Nous joindre ?</h2><br></br>
                        <p className='footer-p'>
                            <FaPhoneAlt className='footer-icon phone' /> (+229) 62 15 75 75
                        </p>
                        <p className='footer-p'>
                            <FaEnvelope className='footer-icon envelopp'/> contact@ifabit.com
                        </p>
                        
                        <p className=" reseau-socio">
                <a href='' className='reseau-socio '><FaFacebookF   className='footer-icon facebook' /></a>
                  <a href='' className='reseau-socio  '><FaTelegram  className='footer-icon teleg'/></a>
                  <a href='' className='reseau-socio  '><FaWhatsapp className='footer-icon whats'/></a>
                  <a href='' className='reseau-socio  '><FaInstagram  className='footer-icon insta'/></a>
                  <a href='' className='reseau-socio  '><FaLinkedinIn  className='footer-icon linkd'/></a>
                  <a href='' className='reseau-socio '><FaTwitter  className='footer-icon twit'/></a>
                  </p>
                    </div>
                </div>
            </div>
            <div className='copyright py-2 d-flex align-items-center justify-content-center'>
                <p className='text-center text-white footer-p'>Copyright, <strong className='copyrigth'>{Year}-IFABIT</strong></p>
            </div>
        </div>
        
    )
}

export default Footer ;