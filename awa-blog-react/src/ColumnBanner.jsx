export default function ColumnBanner( {title, image, analysisBy, accolades, text})
{
    return(
        <div className="column-banner">
        <h3>{title}</h3>
        <img src={image}></img>
        <div className="athlete-title">
            <h4>{analysisBy}</h4>
            <h5>{accolades}</h5>
        </div>
        <p>{text}</p>
        </div>
    )
}