import "./About.css"
import React from "react";
import aboutLogo from "./images/marian.png"
const About=()=>{
    return (<section id={"about-section"}>
                <div className={"inner-width"}>
                    <h1 className={"about-title"}>About</h1>
                    <div className={"about-content"}>
                        <img className={"about-pic"} src={aboutLogo}></img>
                        <div className={"about-text"}>
                        <h2>Mykhailo Karpa</h2>

                        <p>

                            Hello,my name is Mykhailo and I am 21 years old.
                            I live in Lviv.
                            <br/>
                            This year I have finished the  Lviv Polytechnic National University
                            with bachelor's degree. My speciality was "<i>Computer science</i>" : "<i>Artificial Intelligence System</i>".
                            <br/>
                            As for my hobbies, I cycling and swimming.This month I have started to study ASP.NET, Entity Framework, Angular.
                        </p>
                    </div>
                    </div>

                    <div className={"skills"}>
                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>C#</span>
                            <span>80%</span>
                        </div>
                        <div className={"skill-bar react"}></div>
                        </div>

                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>C++</span>
                            <span>60%</span>
                        </div>
                        <div className={"skill-bar js"}></div>
                        </div>

                        <div className={"skill"}>
                        <div className={"skill-info"}>
                            <span>SQL</span>
                            <span>90%</span>
                        </div>
                        <div className={"skill-bar html"}></div>
                        </div>

                    </div>

                    </div>
            </section>)
}
export default About;