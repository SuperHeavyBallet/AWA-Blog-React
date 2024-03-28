export default function NewsPreview( { image, title, previewText}){
    return (
        <div className="news-preview">
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{previewText}</p>
        </div>

    )
}