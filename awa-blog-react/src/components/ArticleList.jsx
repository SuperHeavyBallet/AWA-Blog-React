import ArticleListElements from "./ArticleListElements";

const arrayOfArticles = [
    {
        articleID: 0,
        articleTitle: "Krasimir Kostadinov's New Handle",
        articleLink: "/",
    },
    {
        articleID: 1,
        articleTitle: "What We Can Learn from Kazakhstan & Georgia",
        articleLink: "/",
    },
    {
        articleID: 2,
        articleTitle: "What Happened to Hard Work?",
        articleLink: "/",
    },
]

export default function ArticleList()
{
    return(
        <div>
            <h2 className="article-list-title">Article List</h2>
            <div className="article-list">
                {arrayOfArticles.map((article) => (
                    <ArticleListElements 
                    key={article.articleID}
                    articleTitle={article.articleTitle} 
                    articleLink={article.articleLink}
                    />
                ))}


                

            </div>
        </div>
    )
}