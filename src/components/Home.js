import React, { useState, useEffect } from "react";
//import axios from 'axios';
import Accordion from "react-bootstrap/Accordion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mobile from "../assets/img/IFAphone.png";
import paiement from "../assets/img/paiement.png";
import transfert from "../assets/img/Transfert.png";
import computer from "../assets/img/computer1.png";
import download from "../assets/img/Phone-1.png";
import faq from "../assets/img/FAQ ICON.png";
import ios from "../assets/img/ios.png";
import android from "../assets/img/android.png";
import Artboard from "../assets/img/Artboard.png";
import {
  FaBars,
  FaStar,
  FaTimes,
  FaCode,
  FaMoneyCheckAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
//import {FiArrowUpRight, FiArrowDown, FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
//import logo from '../assets/img/logo.png';
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaDollarSign, FaHandshake } from "react-icons/fa";


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import InfiniteCarousel from "react-leaf-carousel";

function Home() {
  return (
    <div>
      <Navbar />
      {/* ================================== Caroussel menu  début ==============================================*/} 
      <div className="hero">
        <Carousel id="carousel" indicators={false}>
          <Carousel.Item>
            <div className="container py-5">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6" id="labelh1p">
                  <h1
                    className="text-uppercase text-white"
                    style={{ fontFamily: "poppins" }}
                  >
                    Devenez partenaire IFA
                  </h1>
                  <p
                    className="text-white"
                    style={{ fontFamily: "Work Sans", fontSize: "20px" }}
                  >
                    En devenant un partenaire IFA, vous gagnez des comissions
                    sur les retraits de fonds par les utilisateurs, à travers
                    votre compte.
                  </p>
                  <a
                    className="btn btn-color"
                    href="https://app.ifabit.com/auth/signup"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Commencer maintenant
                  </a>
                </div>
                <div className="col-lg-6" id="divImg">
                  <img
                    className="img-fluid mobile"
                    id="CarouselImgHome"
                    src={mobile}
                    alt="mobile"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="container py-5">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6" id="labelh1p">
                  <h1
                    className="text-uppercase text-white"
                    style={{ fontFamily: "poppins" }}
                  >
                    Transfert d'argent
                  </h1>
                  <p
                    className="text-white"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Transférez de l'argent en toute sécurité à vos proches à
                    moindre coût. Payez vos factures, achetez des biens et
                    services direcement depuis votre portefuille IFA.
                  </p>
                  <a
                    className="btn btn-color"
                    href="https://app.ifabit.com/auth/signup"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Commencer maintenant
                  </a>
                </div>
                <div
                  className="col-lg-6 col-sm-12 col-md-6 col-xs-6"
                  id="divImg"
                >
                  <img
                    className="img-fluid  mobile"
                    id="CarouselImgHome"
                    src={transfert}
                    alt="transfert"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container py-5">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6" id="labelh1p">
                  <h1
                    className="text-uppercase text-white"
                    style={{ fontFamily: "poppins" }}
                  >
                    Transfert d'argent
                  </h1>
                  <p
                    className="text-white"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Transférez de l'argent en toute sécurité à vos proches à
                    moindre coût. Payez vos factures, achetez des biens et
                    services direcement depuis votre portefuille IFA.
                  </p>
                  <a
                    className="btn btn-color"
                    href="https://app.ifabit.com/auth/signup"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Commencer maintenant
                  </a>
                </div>
                <div
                  className="col-lg-6 col-sm-12 col-md-6 col-xs-6"
                  id="divImg"
                >
                  <img
                    className="img-fluid  mobile"
                    id="CarouselImgHome"
                    src={paiement}
                    alt="paiement"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container py-5">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6" id="labelh1p">
                  <h1
                    className="text-uppercase text-white"
                    style={{ fontFamily: "poppins" }}
                  >
                    Transfert d'argent
                  </h1>
                  <p
                    className="text-white"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Transférez de l'argent en toute sécurité à vos proches à
                    moindre coût. Payez vos factures, achetez des biens et
                    services direcement depuis votre portefuille IFA.
                  </p>
                  <a
                    className="btn btn-color"
                    href="https://app.ifabit.com/auth/signup"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Commencer maintenant
                  </a>
                </div>
                <div
                  className="col-lg-6 col-sm-12 col-md-6 col-xs-6"
                  id="divImg"
                >
                  <img
                    className="img-fluid  mobile"
                    id="CarouselImgHome"
                    src={Artboard}
                    alt="paiement"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
 {/* ================================== caroussel menu  fin ==============================================*/} 
{/* ================================== Commentaire  début ==============================================*/} 
      <div className="crypto py-5">
        <div className="container py-5">
          <div className="text-center text-white">
            <h2 className="text-uppercase text-center">
              Achetez. Vendez. Partout
            </h2>
          </div>
          <div className="row py-5">
            <div className="col-lg-4 my-2 ">
              <div className="card cardleft">
                <div className="card-body">
                  <div className="card-text">
                   <FaDollarSign className="crypto-icon" />
                    <h5 className="crypto-h5">
                     Transférez de l'argent
                    </h5>
                    <p className="crypto-p">
                    Transférez de l'argent en toute
                       sécurité à vos proches à moindre 
                       coût. Payer vos factures , achétez
                        des biens et services directement
                         depuis votre portefuille IFABIT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2 ">
              <div className="card  cardcenter">
                <div className="card-body">
                  <div className="card-text">
                    <RiArrowLeftRightFill className="crypto-icon" />
                    <h5 className="crypto-h5">
                      Achetez et Vendez des<br/>
                       cryptomonnaies !
                    </h5>
                    <p  className="crypto-p">
                    Transférez de l'argent en toute
                       sécurité à vos proches à moindre 
                       coût. Payer vos factures , achétez
                        des biens et services directement
                         depuis votre portefuille IFABIT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2 ">
              <div className="card  cardrigth">
                <div className="card-body">
                  <div className="card-text">
                    
                  <FaHandshake className="crypto-icon" />
                    <h5 className=" crypto-h5">
                     Devenez partenaire<br/>
                      et gagnez de l'argent !
                    </h5>
                    <p className="crypto-p">
                      Transférez de l'argent en toute
                       sécurité à vos proches à moindre 
                       coût. Payer vos factures , achétez
                        des biens et services directement
                         depuis votre portefuille IFABIT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ================================== Commentaire  début ==============================================*/} 
{/* ================================== Devises disponible   début ==============================================*/} 
<div className="devises container-fluid">
<div className="container devises-container">
 <div className="devises-div">
  <h1 className="devises-h1">25 devises disponibles !</h1>
  <p className="devises-p">IFABIT offre la possibilité d'échanges, de ventes et<br/>
   d'achats de plusieurs produits. En dehors de cette<br/>
    possibilité, envoyer de l'argent vers d'autres<br/>
     réseaux est aussi possible.
   
  </p>
  <a href="" className="btn  btn-guide">S'inscrire</a>
 </div>
 </div>
</div>
{/* ==================================   Devises disponible FIN ==============================================*/} 
{/* ================================== Integrer notre API  début ==============================================*/} 
<div className="integrer-api container-fluid">
 <div className="container integrer-container">
 <div className="integrer-div">
  <h1 className="integrer-h1">Intégrer notre API comme <br/>module de payement !</h1>
  <p className="integrer-p">Un module de payementsans redirection est intégrable<br/>
   sur votre plateforme afin de rendre l'expérience de<br/>
   paiement fluid.<br/>
  Nous vous fournissons une api pour exécuter vos<br/>
   requêtes et manipuler votre compte depuis votre<br/>
    propre systèmes.Les appels et les procédures<br/>
     sont tous documentés.
  </p>
  <a href="" className="btn  btn-guide">Voir guide d'intégration</a>
 </div>
 </div>
</div>
{/* ==================================  Integrer notre API FIN ==============================================*/} 
{/* ================================== Commentaire  début ==============================================*/} 
      <div className="commentaire container-fluid">
        <div className="commentaire-div">
          <h1 className="commentaire-h1">
            Ce que nos utilisateurs pensent
            <br /> de nous !
          </h1>
        </div>
        <div className="im-back"></div>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={1}
          sideSize={0.5}
          slidesToScroll={1}
          slidesToShow={2}
          scrollOnDevice={true}
          autoCycle={true}
          nextArrow={null}
          prevArrow={null}
          arrows={false}
          className="InfiniteCarousel"
        >
          <div className="container  px-4 comment-nb">
            <div className="card">
                  <div className="card-body">
                    <div className="card-text">
                      <div className="div-star">
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                      </div>
                      <h3 className="text-nom">Clara AMOUSSOU</h3>
                      <p className="text-centers">
                        Avec la nouvelle application IFABit, vous trouverez la
                        crème des services financiers en une seule application.
                        IFABit, c'est plus de 50 plateformes de services
                        financiers en une seule. Le design et les services
                        intégrés ont été conçus pour vous offrir une meilleure
                        expérience utilisateur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-commentaire-div"><img src={computer} className="rounded-circle img-fluid  img-commentaire" /></div>
              
          </div>
          <div className="container  px-4 comment-nb">
            <div className="card">
                  <div className="card-body">
                    <div className="card-text">
                      <div className="div-star">
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                      </div>
                      <h3 className="text-nom">Clara AMOUSSOU</h3>
                      <p className="text-centers">
                        Avec la nouvelle application IFABit, vous trouverez la
                        crème des services financiers en une seule application.
                        IFABit, c'est plus de 50 plateformes de services
                        financiers en une seule. Le design et les services
                        intégrés ont été conçus pour vous offrir une meilleure
                        expérience utilisateur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-commentaire-div"><img src={computer} className="rounded-circle img-fluid  img-commentaire" /></div>
              
          </div>
          <div className="container  px-4 comment-nb">
          
            <div className="card">
                  <div className="card-body">
                    <div className="card-text">
                      <div className="div-star">
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                        <FaStar className="icon-commentaire-star" />
                      </div>
                      <h3 className="text-nom">Clara AMOUSSOU</h3>
                      <p className="text-centers">
                        Avec la nouvelle application IFABit, vous trouverez la
                        crème des services financiers en une seule application.
                        IFABit, c'est plus de 50 plateformes de services
                        financiers en une seule. Le design et les services
                        intégrés ont été conçus pour vous offrir une meilleure
                        expérience utilisateur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-commentaire-div"><img src={computer} className="rounded-circle img-fluid  img-commentaire" /></div>
              
          </div>
        </InfiniteCarousel>
      </div>
      {/* ================================== Commentaire  fin ==============================================*/} 
      {/* ================================== donwload  début ==============================================*/} 
      <div className="download">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h1 className="txt-telecharger" >Télécharger l'app IFABIT</h1>
              <p className="bg-tertiaryColor">
                Avec la nouvelle application IFABit, vous trouverez la crème des
                services financiers en une seule application. IFABit, c'est plus
                de 50 plateformes de services financiers en une seule. Le design
                et les services intégrés ont été conçus pour vous offrir une
                meilleure expérience utilisateur.{" "}
                <strong>
                  Nous aimons nos clients et nos clients aiment nos services
                </strong>
              </p>
              <div className="row download-app">
                <div className="col-lg-6">
                  <a>
                    <img src={ios} className="img-fluid  img-andios" />
                  </a>
                </div>
                <div className="col-lg-6">
                  <a>
                    <img src={android} className="img-fluid img-andios" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 app-img animate__animated animate__fadeInRight">
              <img src={download} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
{/* ================================== donwload  fin ==============================================*/} 
      <Footer />
    </div>
  );
}

export default Home;
