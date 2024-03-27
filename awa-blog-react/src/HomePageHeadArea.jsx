import NewsPreview from "./NewsPreview";
import MetalPipes from "./images/metalPipes.jpg"

export default function HomePageHeadArea()
{
    return(
        <div className="home-page-head-area">
            <h3>Latest Content</h3>

            <div className="home-page-news-area"> 
                <div className="large-news-area">
                    <NewsPreview className="large-news-preview" image={MetalPipes} title="The Title?" previewText="Lorem ipsum dolce gabanna hm versace indigo foxtrot..."/>
                </div>

                <div className="small-news-area">
                    <NewsPreview className="small-news-preview" image={MetalPipes} title="The Title?" previewText="Lorem ipsum dolce gabanna hm versace indigo foxtrot..."/>
                    <NewsPreview className="small-news-preview" image={MetalPipes} title="The Title?" previewText="Lorem ipsum dolce gabanna hm versace indigo foxtrot..."/>
                </div>
            </div>

            

        </div>
    )
}