import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import WorkoutsPageMainColumn from "./WorkoutsPageMainColumn";

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function WorkoutsPageConstructor() {

    useScrollToTop();
    
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