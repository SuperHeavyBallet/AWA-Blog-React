import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import AboutPageMainColumn from "./AboutPageMainColumn";

function AboutPageConstructor() {
    return(
        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <AboutPageMainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
}

export default AboutPageConstructor;