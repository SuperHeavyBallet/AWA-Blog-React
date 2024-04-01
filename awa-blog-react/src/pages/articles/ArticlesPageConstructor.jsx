import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import ArticlesPageMainColumn from "./ArticlesPageMainColumn";

function ArticlesPageConstructor() {
    return(
        <div className="display-container">
            
            <NavBar />
            <div className="content-container">
                
                <Gutter gutterPosition={"left"}/>
                <ArticlesPageMainColumn />
                <Gutter gutterPosition={"right"}/>
            </div>
        </div>
    )
}

export default ArticlesPageConstructor;