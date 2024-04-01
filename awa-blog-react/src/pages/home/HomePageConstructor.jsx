import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import HomePageMainColumn from "./HomePageMainColumn";



export default function HomePageConstructor()
{

    return(

        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <HomePageMainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
    
}