import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import WorkoutsPageMainColumn from "./WorkoutsPageMainColumn";

function WorkoutsPageConstructor() {
    return(

        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <WorkoutsPageMainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
}

export default WorkoutsPageConstructor;