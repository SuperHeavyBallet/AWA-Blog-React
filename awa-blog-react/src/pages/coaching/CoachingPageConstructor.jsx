import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import CoachingPageMainColumn from "./CoachingPageMainColumn";

function CoachingPageConstructor() {
    return(
        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <CoachingPageMainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
}

export default CoachingPageConstructor;