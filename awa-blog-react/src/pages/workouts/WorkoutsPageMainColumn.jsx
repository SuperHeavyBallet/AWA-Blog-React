import Footer from "../../components/Footer";
import WorkoutsPageHeadArea from "./WorkoutsPageHeadArea";
import WorkoutsPageMidArea from "./WorkoutsPageMidArea";

export default function WorkoutsPageMainColumn()
{
    return(
        <div className="main-column">
            <WorkoutsPageHeadArea />
            <WorkoutsPageMidArea />
            <Footer />
            
        </div>
    )
}