import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import ReadyGoAppPageMainColumn from "./ReadyGoAppPageMainColumn";

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function ReadyGoAppPageConstructor() {

    useScrollToTop();
    
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