import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import ReadyGoAppPageMainColumn from "./ReadyGoAppPageMainColumn";


function ReadyGoAppPageConstructor() {
    return(

        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <ReadyGoAppPageMainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
}

export default ReadyGoAppPageConstructor;