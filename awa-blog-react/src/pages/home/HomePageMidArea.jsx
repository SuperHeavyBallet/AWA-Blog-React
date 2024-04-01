import { Link } from "react-router-dom";

import MetalPipes from "../../images/metalPipes.jpg"
import ColumnBanner from "../../components/ColumnBanner";


class Column {
    constructor(title, image, analysedBy, accolades, mainText) {
        this.title = title;
        this.image = image;
        this.analysedBy = analysedBy;
        this.accolades = accolades;
        this.mainText = mainText;
    }
}

const column1 = new Column(
    
    "Classic Side Pressure",
    MetalPipes, // Assuming MetalPipes is a variable holding the image path or object
    "Slobodan Novaković",
    "10x Serbian Champion",
    <>This guy is an example of <strong>classic side pressure</strong> without including any significant back pressure. There is <strong>no top roll, not rotation or pronation</strong>, it’s almost entirely side pressure...</>
);


const column2 = new Column(
    "Pronation is Weak",
    MetalPipes, // Assuming MetalPipes is a variable holding the image path or object
    "Slobodan Novaković",
    "10x Serbian Champion",
    <>The problem is that his <strong>pronation is weak</strong> compared to his other strengths. He is <strong>unable to get strong and fast hookers into an effective position</strong> at the start because pronation is lacking...</>
);

const column3 = new Column(
    "Escape for the Straps",
    MetalPipes, // Assuming MetalPipes is a variable holding the image path or object
    "Slobodan Novaković",
    "10x Serbian Champion",
    <>He needs to improve the ability to <strong>escape for the strap</strong>, as it is now he tries but ends up in a <strong>very compromised position</strong> where he does nothing except exhaust his fingers and wrist...</>
);




export default function HomePageMidArea()
{

    return (
        <div className="home-page-mid-area">
            <div className="home-page-mid-title">
            <h2>Get Your Performance & Strength Analysed by Elite Athletes</h2>
            </div>
            
            <div className="mid-area-columns">
                <ColumnBanner linkDestination="coaching" title={column1.title} image={column1.image} analysisBy={column1.analysedBy} accolades={column1.accolades} text={column1.mainText}/>
                <ColumnBanner linkDestination="coaching"  title={column2.title} image={column2.image} analysisBy={column2.analysedBy} accolades={column2.accolades} text={column2.mainText}/>
                <ColumnBanner linkDestination="coaching"  title={column3.title} image={column3.image} analysisBy={column3.analysedBy} accolades={column3.accolades} text={column3.mainText}/>
            
            </div>

        <div className="arrow-link-container">
            <Link to="coaching">
                <div className="analysis-footer">
                            
                            <h3>Get Analysed Here</h3>
                            <svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="#FFF">
                                <polygon  points="155.139,77.566 79.18,1.596 79.18,45.978 0,45.978 0,109.155 79.18,109.155 79.18,153.542 ">
                                    </polygon>
                                    </svg>
                                    
                        </div>
                    </Link>
                    </div>

            
        </div>
    )
}