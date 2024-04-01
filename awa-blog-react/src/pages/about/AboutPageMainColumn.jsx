import AboutPageHeadArea from "./AboutPageHeadArea";
import AboutPageMidArea from "./AboutPageMidArea";
import Footer from "../../components/Footer";

export default function AboutPageMainColumn()
{
    return(
        <div className="main-column">
            <AboutPageHeadArea />
            <AboutPageMidArea />
            <Footer />
            
        </div>
    )
}