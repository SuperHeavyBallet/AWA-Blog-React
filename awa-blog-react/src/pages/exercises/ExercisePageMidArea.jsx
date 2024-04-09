import ExerciseCard from "../../components/ExerciseCard";
import ArticleList from "../../components/ArticleListElements";

export default function ExercisePageMidArea()
{
    return(
        <div>

            <ExerciseCard 
            exerciseName="Bicep Curl"
            helpsStyle="Hook"
            musclesWorked={[ "Bicep", "Brachialis"]}
            image={null}
            imageAlt={"An Image of a Bicep Curl"}
            descriptionText=
            "The Bicep Curl is a simple exercise to target the Bicep and Brachialis, two elbow flexors in a supinated (Palm Up) forearm position."
            />

            <ExerciseCard 
            exerciseName="Hammer Curl"
            helpsStyle="Top Roll"
            musclesWorked={[ "Brachioradialis", "Brachialis"]}
            image={null}
            imageAlt={"An Image of a Hammer Curl"}
            descriptionText=
            "The Bicep Curl is a simple exercise to target the Brachioradialis and Brachialis, two elbow flexors in a neutral (Thumb On Top) forearm position."
            />  

            <ExerciseCard />

            
        </div>
    )
}