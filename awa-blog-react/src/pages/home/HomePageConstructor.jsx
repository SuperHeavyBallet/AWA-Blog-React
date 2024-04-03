import React from "react";
import NavBar from "../../components/NavBar";
import Gutter from "../../components/Gutter";
import HomePageMainColumn from "./HomePageMainColumn";

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default function HomePageConstructor()
{

    useScrollToTop();

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