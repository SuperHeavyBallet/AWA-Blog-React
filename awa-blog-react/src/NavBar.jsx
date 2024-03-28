import React from "react";
import NavBarLogo from "./NavBarLogo";
import NavBarLink from "./NavBarLink";

export default function NavBar()
{
    return (
        <div className="nav-bar">
            <NavBarLogo logoText={"ARMWRESTLING ACADEMIA"} />
            <div className="nav-bar-links">
                <NavBarLink linkText={"News"}/>
                <NavBarLink linkText={"Exercises"}/>
                <NavBarLink linkText={"Workouts"}/>
                <NavBarLink linkText={"Ready-Go App"}/>
                <NavBarLink linkText={"Coaching"}/>
                <NavBarLink linkText={"About"}/>
            </div>
        </div>
    )
}