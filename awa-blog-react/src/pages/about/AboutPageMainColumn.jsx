import AboutPageHeadArea from "./AboutPageHeadArea";
import AboutPageMidArea from "./AboutPageMidArea";

export default function AboutPageMainColumn()
{
    return(
        <div className="main-column">
            <AboutPageHeadArea />
            <AboutPageMidArea />
            
        </div>
    )
}