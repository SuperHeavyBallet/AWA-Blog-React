import ReadyGoAppHeadArea from "./ReadyGoAppPageHeadArea";
import ReadyGoAppMidArea from "./ReadyGoAppPageMidArea";

export default function ReadyGoAppPageMainColumn()
{
    return(
        <div className="main-column">
            <ReadyGoAppHeadArea />
            <ReadyGoAppMidArea />
            
        </div>
    )
}