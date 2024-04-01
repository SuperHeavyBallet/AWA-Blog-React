import Footer from "../../components/Footer";
import ReadyGoAppHeadArea from "./ReadyGoAppPageHeadArea";
import ReadyGoAppMidArea from "./ReadyGoAppPageMidArea";

export default function ReadyGoAppPageMainColumn()
{
    return(
        <div className="main-column">
            <ReadyGoAppHeadArea />
            <ReadyGoAppMidArea />
            <Footer />
            
        </div>
    )
}