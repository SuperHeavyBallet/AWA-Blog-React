export default function ArticleContainer( {articleTitle, articleHeadImage, articlePublishDate, articleText, articleAuthor})
{
    return(
        <div className="article">
            <h2 className="article-title">{articleTitle}</h2>
            <img src={articleHeadImage} className="article-head-image"></img>
            <h4 className="article-publish-date">{`Published on: ${articlePublishDate}`}</h4>
            <p className="article-text">{articleText}</p>
            <h6 className="article-author">{`Article by ${articleAuthor}`}</h6>

        </div>
    )
}