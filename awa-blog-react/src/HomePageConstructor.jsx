import React from "react";
import NavBar from "./NavBar";
import Gutter from "./Gutter";
import MainColumn from "./MainColumn";
import GhostNavBar from "./GhostNavBar";



export default function HomePageConstructor()
{

    return(

        <div className="display-container">
            
            <NavBar />
            <GhostNavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <MainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
    
}