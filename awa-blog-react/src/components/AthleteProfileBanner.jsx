import { Link } from "react-router-dom";

export default function AthleteProfileBanner( {linkDestination, title, image, accolades, socialMediaLink})
{
    return(
        <div className="column-banner">
        <Link to={linkDestination}>
        <div>
            {title}</div>
            </Link>
            </div>
    )
}