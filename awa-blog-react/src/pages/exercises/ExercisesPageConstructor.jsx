import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import ExercisePageMainColumn from "./ExercisePageMainColumn";

function ExercisesPageConstructor() {
    return(

        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <ExercisePageMainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
}

export default ExercisesPageConstructor;