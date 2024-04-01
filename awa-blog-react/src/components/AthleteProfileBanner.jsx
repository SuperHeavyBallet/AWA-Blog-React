import { Link } from "react-router-dom";

export default function AthleteProfileBanner( {linkDestination, title, image, accolades, technique, socialMediaLink})
{
    const nameString = title.toString();
    const nameParts = nameString.split(" ");

    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];

    return(
        <div className="athlete-banner">
        <Link to={linkDestination}
        className="link-style">
        <div className="athlete-profile-banner">
            <div className="athlete-title">
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
            </div>
            
            <img src={image}></img>
            <h4>{accolades}</h4>
            <h4 className="athlete-banner-bottom">Style: {technique}</h4>
            </div>
            </Link>
            </div>
    )
}