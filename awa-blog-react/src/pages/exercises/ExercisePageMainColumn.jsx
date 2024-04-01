import ExercisePageHeadArea from "./ExercisePageHeadArea";
import ExercisePageMidArea from "./ExercisePageMidArea";

export default function ExercisePageMainColumn()
{
    return(
        <div className="main-column">
            <ExercisePageHeadArea />
            <ExercisePageMidArea />
            
        </div>
    )
}