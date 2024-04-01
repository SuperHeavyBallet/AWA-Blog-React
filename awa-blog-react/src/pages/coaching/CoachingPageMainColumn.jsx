import CoachingPageHeadArea from "./CoachingPageHeadArea";
import CoachingPageMidArea from "./CoachingPageMidArea";
import CoachingPageBottomArea from "./CoachingPageBottomArea";
import Footer from "../../components/Footer";

export default function CoachingPageMainColumn()
{
    return(
        <div className="main-column">
            <CoachingPageHeadArea />
            <CoachingPageMidArea />
            <CoachingPageBottomArea />
            <Footer />
            
        </div>
    )
}