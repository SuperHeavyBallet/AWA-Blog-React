import ArticlesPageHeadArea from "./ArticlesPageHeadArea";
import ArticlesPageMidArea from "./ArticlesPageMidArea";
import Footer from "../../components/Footer";

export default function ArticlesPageMainColumn()
{
    return(
        <div className="main-column">
            <ArticlesPageHeadArea />
            <ArticlesPageMidArea />
            <Footer />
            
        </div>
    )
}