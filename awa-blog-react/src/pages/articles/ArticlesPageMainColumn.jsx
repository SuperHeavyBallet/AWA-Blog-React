import ArticlesPageHeadArea from "./ArticlesPageHeadArea";
import ArticlesPageMidArea from "./ArticlesPageMidArea";
import Footer from "../../components/Footer";
import ArticleList from "../../components/ArticleList";

export default function ArticlesPageMainColumn()
{
    return(
        <div className="main-column">
            <div className="articles-page">
                <div className="article-left-column">
                <ArticlesPageHeadArea />
                <ArticlesPageMidArea />
                </div>
                   <div className="article-right-column">
                    <ArticleList />
                        
                 </div>
             </div>
            
            <Footer />
            
        </div>
    )
}