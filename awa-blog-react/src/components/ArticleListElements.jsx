import { Link } from "react-router-dom"

export default function ArticleListElements( {articleTitle, articleLink} )
{
    return(
        <div className="article-list-element">
            <Link to={articleLink} className="link-style">

                
                    {`- ${articleTitle}`}
            
                    
            </Link>
            </div>
    )
}