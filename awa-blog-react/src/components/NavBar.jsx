import React from "react";
import NavBarLogo from "./NavBarLogo";
import NavBarLink from "./NavBarLink";
import GhostNavBar from "./GhostNavBar";

export default function NavBar()
{
    return (
        <div>
            <GhostNavBar />
       
        <div className="nav-bar">
            
            <NavBarLogo logoFullText={"ARMWRESTLING ACADEMIA"} logoShortText={"AWA"}/>
            <div className="nav-bar-links">
                <NavBarLink linkText={"Home"} linkDestination="/"/>
                <NavBarLink linkText={"Articles"} linkDestination="/articles"/>
                <NavBarLink linkText={"Exercises"} linkDestination="/exercises"/>
                <NavBarLink linkText={"Workouts"} linkDestination="/workouts"/>
                <NavBarLink linkText={"Ready-Go!"} linkDestination="/readygo"/>
                <NavBarLink linkText={"Coaching"} linkDestination="/coaching"/>
                <NavBarLink linkText={"About"} linkDestination="/about"/>
            </div>
        </div>
        </div>
    )
}