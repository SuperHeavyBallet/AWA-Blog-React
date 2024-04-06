export default function ExerciseCard( { exerciseName, helpsStyle, musclesWorked, descriptionText, image, imageAlt})
{
    return(
        <div className="exercise-card">
            <h3>{exerciseName}</h3>
            <img src={image} alt={imageAlt} />
            <p>Improves: {helpsStyle}</p>
            <ul> Uses:
                {musclesWorked && musclesWorked.map((muscle) => (
                    <li key={muscle}>{muscle}</li>
                ))}
            </ul>
            <p>{descriptionText}</p>
                
            

        </div>
    )
}