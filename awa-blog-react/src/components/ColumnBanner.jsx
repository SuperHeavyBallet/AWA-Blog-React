import { Link } from "react-router-dom";

export default function ColumnBanner( { linkDestination, title, image, analysisBy, accolades, text})
{
    return(
        
        <div className="column-banner">
            <Link to={linkDestination}
            className="link-style">
                <h3>{title}</h3>
                <img src={image}></img>
                <div className="preview-athlete-title">
                    <h4>{analysisBy}</h4>
                    <h5>{accolades}</h5>
                </div>
                <p>{text}</p>
        </Link>
        </div>
        
    )
}