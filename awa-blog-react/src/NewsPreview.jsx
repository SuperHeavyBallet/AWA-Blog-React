export default function MainNewsPreview( {image, title, previewText}){
    return (
        <div>
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{previewText}</p>
        </div>

    )
}