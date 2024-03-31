import React from "react";
import { Link } from "react-router-dom";

export default function NavBarLink( { linkText, linkDestination })
{


    return (
        <Link 
                to={linkDestination}
                className="nav-bar-link link-style"
                >
            <div className="nav-bar-link-element">
            <h3>
                    {linkText}
                    </h3>

        </div>
        </Link>
    )
}