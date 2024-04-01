import { Link } from "react-router-dom"

export default function NewsPreview( { linkDestination, image, title, previewText}){
    return (
        <div className="news-preview">
            <Link 
            to={linkDestination}
            className="link-style">
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{previewText}</p>
            </Link>
        </div>

    )
}