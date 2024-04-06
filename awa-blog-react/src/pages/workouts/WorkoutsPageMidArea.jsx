import WorkoutCard from "../../components/WorkoutCard";

export default function WorkoutsPageMidArea()
{
    return(
        <div className="workouts">

            <WorkoutCard 
                workoutTitle="4 Week Cycle"
                workoutDescription="A 4 week cycle focused on strength"
                workoutDays={
                    [ "Day 1", "Day 2" , "Day 3", "Day 4"]
                }
            />

<WorkoutCard 
                workoutTitle="6 Week Cycle"
                workoutDescription="A 6 week cycle focused on strength"
                workoutDays={
                    [ "Day 1", "Day 2" , "Day 3", "Day 4", "Day 5", "Day 6"]
                }
            />

        </div>
    )
}