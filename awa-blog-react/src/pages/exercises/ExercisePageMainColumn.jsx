import Footer from "../../components/Footer";
import ExercisePageHeadArea from "./ExercisePageHeadArea";
import ExercisePageMidArea from "./ExercisePageMidArea";
import ExerciseList from "../../components/ExerciseList";

export default function ExercisePageMainColumn()
{
    return(
        <div className="main-column">
            <div className="articles-page">
            <div className="article-left-column">
            <ExercisePageHeadArea />
            <ExercisePageMidArea />
            </div>

             
                   <div className="article-right-column">
                    <ExerciseList />
                        
                 </div>
                 </div>
            <Footer />
            
        </div>
    )
}