
import React from "react";
import ftr from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faFacebookF,
    faYoutube, faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'


const Footer=()=>{
    return (
    <div className="App">
        <section id={ftr.footerSection}>
            <div className={ftr.footer}>
                <div className={ftr.copyright}>
                    &copy; <i>Mykhailo Karpa </i>

                </div>
                <div className={ftr.smm}>
                    <a href={"https://instagram.com/misha_karpa?r=nametag"} target={"_blank"}> <FontAwesomeIcon  icon={faInstagram} size = '2x' color={"white"}/> </a>
                   <a href={"https://www.linkedin.com/mwlite/in/mykhailo-karpa-3894571b6"}  target={"_blank"}> <FontAwesomeIcon  icon={faLinkedinIn} size = '2x' color={"white"}/> </a>
                    <a href={"https://www.facebook.com/profile.php?id=100023484875817"}  target={"_blank"}> <FontAwesomeIcon  icon={faFacebookSquare} size = '2x' color={"white"}/> </a>

                </div>


            </div>

            </section>
    </div>)
}
export default Footer;