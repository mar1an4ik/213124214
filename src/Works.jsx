
import React from "react";
import works from "./Works.module.css"
import adds from "./images/works/111.jpg"
import dyplom from "./images/works/222.jpg"
import work3 from "./images/works/333.png"
const Works=()=>{
    return (
    <div id={"worksSection"}>

            <section id={works.worksSection}>
                <h1 className={works.title}>Works</h1>
                <div className={works.blocks}>


                    <a className={works.block} target={"_blank"} href={"https://drive.google.com/file/d/1OgOO59pYDVkNH98WWJOIPdqJqkJz2KsI/view?usp=sharing"}><img src={adds}/>
                        <div className={works.descr}>
                            <h3>SQL certificate</h3>
                            <h4></h4>
                            <p className={works.date}>January 24 2020</p>
                        </div>
                    </a>

                    <a className={works.block} target={"_blank"} href={"https://drive.google.com/file/d/1o6SmmuKKJPR-opkE55Fkfp2JlOvqrjX8/view"}><img src={work3}/>
                        <div className={works.descr}>
                            <h3>SoftServe IT courses certificate</h3>
                            <h4></h4>
                            <p className={works.date}>March 20 2020</p>
                        </div>
                    </a>

                    <a className={works.block} target={"_blank"} href={"https://drive.google.com/file/d/18ZG_49HvgNmPm_SPrH5JX0157B8cMdug/view?usp=sharing"}><img src={dyplom}/>
                        <div className={works.descr}>
                            <h3>C# certificate</h3>
                            <h4></h4>
                            <p className={works.date}>October 06 2020</p>
                        </div>
                    </a>











                </div>

            </section>
    </div>)
}
export default Works;