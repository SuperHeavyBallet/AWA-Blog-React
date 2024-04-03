import Footer from "../../components/Footer";
import HomePageBottomArea from "./HomePageBottomArea";
import HomePageHeadArea from "./HomePageHeadArea";
import HomePageMidArea from "./HomePageMidArea";

export default function HomePageMainColumn()
{
    return(
        <div className="main-column">
            <HomePageHeadArea />
            <HomePageMidArea />
            <HomePageBottomArea />
            <Footer />
            
        </div>
    )
}