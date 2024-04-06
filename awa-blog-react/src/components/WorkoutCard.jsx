export default function WorkoutCard( { workoutTitle, workoutDescription, workoutDays})
{
    return(
        <div className="workout-card">
            <h3>{workoutTitle}</h3>
            <p>{workoutDescription}</p>
            <ul> Workout:
                {workoutDays && workoutDays.map((day) => (
                    <li key={day}>{day}</li>
                ))}
            </ul>
        </div>
    )
}