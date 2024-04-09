import ArticleListElements from "./ArticleListElements";

const arrayOfExercises = [
    {
        exerciseID: 0,
        exerciseTitle: "Bicep Curl",
        exerciseLink: "/",
    },
    {
        exerciseID: 1,
        exerciseTitle: "Hammer Curl",
        exerciseLink: "/",
    },
    {
        exerciseID: 2,
        exerciseTitle: "Inside Row",
        exerciseLink: "/",
    },
    {
        exerciseID: 3,
        exerciseTitle: "Wrist Curl",
        exerciseLink: "/",
    },
    {
        exerciseID: 4,
        exerciseTitle: "Wrist Extension",
        exerciseLink: "/",
    },
    {
        exerciseID: 5,
        exerciseTitle: "Reverse Curl",
        exerciseLink: "/",
    },
    {
        exerciseID: 6,
        exerciseTitle: "Pronation Curl",
        exerciseLink: "/",
    },
]

export default function ExerciseList()
{
    return(
        <div>
            <h2 className="article-list-title">Exercise List</h2>
            <div className="article-list">
                {arrayOfExercises.map((article) => (
                    <ArticleListElements 
                    key={article.exerciseID}
                    articleTitle={article.exerciseTitle} 
                    articleLink={article.exerciseLink}
                    />
                ))}


                

            </div>
        </div>
    )
}