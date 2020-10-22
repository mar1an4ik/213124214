import insta from "./images/insta.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import React from "react";
import logo from "./images/black-logo.png"
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitter,
    faLinkedin,
    faSkype,
    faGoogle,
    faInstagramSquare,
    faFacebook,
    faLinkedinIn,
    faInstagram,
    faFacebookF,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Main=()=>{
    return (
    <div className="App">

        <div className={"inner"}>

            <div className={"navbar"}>

                <img src={logo} className={"logo"}></img>
                <a href={"#home"}>Home</a>
                <a href={"#about-section"}>About</a>
                <a href={"#experienceSection"}>Education</a>
                <a href={"#worksSection"}>Works</a>
                <a href={"#contactsSection"}>Contact</a>

            </div>
            <section id={"home"}>
                <div className={"content"}>
                    <h1>Hi, </h1>
                    <div className={"smm"}>
                        <a href={"https://instagram.com/misha_karpa?r=nametag"} target={"_blank"}> <FontAwesomeIcon  icon={faInstagram} size = '2x' color={"white"}/> </a>
                        <a href={"https://www.linkedin.com/mwlite/in/mykhailo-karpa-3894571b6"}  target={"_blank"}> <FontAwesomeIcon  icon={faLinkedinIn} size = '2x' color={"white"}/> </a>
                        <a href={"https://www.facebook.com/profile.php?id=100023484875817"}  target={"_blank"}> <FontAwesomeIcon  icon={faFacebookSquare} size = '2x' color={"white"}/> </a>
                    </div>
                    <div className={"buttons"}>
                        <a href={"#contactsSection"}>Contact me</a>
                        <a href={"https://drive.google.com/file/d/1RMa3-uPM79QhLX_Xgy9Tj7763HCdQ92j/view?usp=sharing"}>Download CV</a>
                    </div>

                </div>
            </section>



        </div>
    </div>)
}
export default Main;