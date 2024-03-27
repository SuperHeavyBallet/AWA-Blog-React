export default function Gutter( {gutterPosition })
{
    return(
        <div className={`gutter ${gutterPosition ? gutterPosition : ''}`}></div>
    )
}