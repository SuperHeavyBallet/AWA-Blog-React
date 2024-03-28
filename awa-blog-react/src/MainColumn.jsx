import HomePageHeadArea from "./HomePageHeadArea";
import HomePageMidArea from "./HomePageMidArea";

export default function MainColumn()
{
    return(
        <div className="main-column">
            <HomePageHeadArea />
            <HomePageMidArea />
            <HomePageHeadArea />
            <HomePageHeadArea />
            
        </div>
    )
}