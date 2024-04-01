import { Link } from "react-router-dom";

export default function AthleteProfileBanner( {linkDestination, title, image, accolades, technique, socialMediaLink})
{
    return(
        <div className="column-banner">
        <Link to={linkDestination}
        className="link-style">
        <div>
            <h3>{title}</h3>
            <img src={image}></img>
            <h4>{accolades}</h4>
            <h4>{technique}</h4>
            </div>
            </Link>
            </div>
    )
}