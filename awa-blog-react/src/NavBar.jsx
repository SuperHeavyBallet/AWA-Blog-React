import React from "react";
import NavBarLogo from "./NavBarLogo";
import NavBarLink from "./NavBarLink";

export default function NavBar()
{
    return (
        <div className="nav-bar">
            <NavBarLogo logoText={"ARMWRESTLING ACADEMIA"} />
            <div className="nav-bar-links">
                <NavBarLink linkText={"Link 1"}/>
                <NavBarLink linkText={"Link 2"}/>
                <NavBarLink linkText={"Link 3"}/>
                <NavBarLink linkText={"Link 4"}/>
                <NavBarLink linkText={"Link 5"}/>
                <NavBarLink linkText={"Link 6"}/>
            </div>
        </div>
    )
}