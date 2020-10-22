
import React from "react";
import exp from "./Experience.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faUniversity,faBriefcase,faAddressCard,faTv} from '@fortawesome/free-solid-svg-icons'
const Experience=()=>{
    return (
    <div id={"experienceSection"}>
            <section id={exp.experienceSection}>

                <div className={exp.innerWidth}>
                    <div className={exp.content}>
                        <h1 className={exp.expTitle}>Education & University</h1>
                        <div className={exp.blocks}>
                            <div className={exp.block}>
                                <FontAwesomeIcon icon={faUniversity} size={`3x`} color={"#48dbfb"}/>
                                <i className="fab fa-facebook-square"></i>
                                <h3>Lviv Polytechnic</h3>
                                <p>From 2016 of September to 2020 of June I used to study in
                                    Lviv Polytechnic. My speciality was Computer Science</p>
                            </div>

                        </div>


                    </div>



                </div>

            </section>
    </div>)
}
export default Experience;