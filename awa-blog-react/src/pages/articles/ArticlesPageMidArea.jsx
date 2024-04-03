import ArticleContainer from "../../components/ArticleContainer";
import MetalPipes from "../../images/metalPipes.jpg";

class Article {
    constructor( articleTitle, articleHeadImage, articlePublishDate, articleText, articleAuthor)
    {
        this.articleTitle = articleTitle;
        this.articleHeadImage = articleHeadImage;
        this.articlePublishDate = articlePublishDate;
        this.articleText = articleText;
        this.articleAuthor = articleAuthor;

    }
}

const articleKrasimirKostadinovHandle = new Article(
    "REVIEW - Krasimir Kostadinov's New Handle",
    MetalPipes,
    "03/04/2020",
    "Habboo  basdoadsdas bdasasdadsbb adsasdbibsda asdasddasubads asdiuasdbasdudas asdudiadsdsa",
    "Alexander Gorham"
);

export default function ArticlesPageMidArea()
{
    return (
        <div>
            <ArticleContainer 
            articleTitle={articleKrasimirKostadinovHandle.articleTitle}
            articleHeadImage={articleKrasimirKostadinovHandle.articleHeadImage}
            articlePublishDate={articleKrasimirKostadinovHandle.articlePublishDate}
            articleText={articleKrasimirKostadinovHandle.articleText}
            articleAuthor={articleKrasimirKostadinovHandle.articleAuthor}/>

            <ArticleContainer 
            articleTitle={articleKrasimirKostadinovHandle.articleTitle}
            articleHeadImage={articleKrasimirKostadinovHandle.articleHeadImage}
            articlePublishDate={articleKrasimirKostadinovHandle.articlePublishDate}
            articleText={articleKrasimirKostadinovHandle.articleText}
            articleAuthor={articleKrasimirKostadinovHandle.articleAuthor}/>
        
        </div>
    )
}