import HomePageHeadArea from "./HomePageHeadArea";
import HomePageMidArea from "./HomePageMidArea";

export default function HomePageMainColumn()
{
    return(
        <div className="main-column">
            <HomePageHeadArea />
            <HomePageMidArea />
            
        </div>
    )
}