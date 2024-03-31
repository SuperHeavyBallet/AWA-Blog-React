import React from "react";
import NavBar from "./NavBar";
import Gutter from "./Gutter";
import MainColumn from "./MainColumn";



export default function HomePageConstructor()
{

    return(

        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <MainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
    
}