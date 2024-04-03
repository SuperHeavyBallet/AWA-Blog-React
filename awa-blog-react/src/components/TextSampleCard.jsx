export default function TextSampleCard( {analysisBy, text, titlePosition} )
{
    return(
        <div className="text-sample-card">
            <div className={`sample-card-name ${titlePosition}`}> <h5>By: {analysisBy}</h5></div>
           <div className="text-sample-text">
            {text.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div> 
        </div>
    );
}