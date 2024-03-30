import NewsPreview from "./NewsPreview";
import MetalPipes from "./images/metalPipes.jpg"

class NewsPreviewPiece {
    constructor(title, image, author, date, mainText) {
        this.title = title;
        this.image = image;
        this.author = author;
        this.date = date;
        this.mainText = mainText;
    }
}

const mainNewsPreview = new NewsPreviewPiece(
    "REVIEW: Krasimir Kostadinov's Handle",
    MetalPipes,
    "Alexander Gorham",
    "01:01:0001",
    <>
            The Legend of Armwrestling; Krasimir Kostadinov from Bulgaria has just released his new training handle to the public. How does it hold up to other options out there?
    </>
);



export default function HomePageHeadArea()
{
    return(
        <div className="home-page-head-area">
            

            <div className="home-page-news-area"> 
                <div className="large-news-area">
                    <NewsPreview 
                        className="large-news-preview" image={MetalPipes} title={mainNewsPreview.title} previewText={mainNewsPreview.mainText}/>
                </div>

                <div className="small-news-area">
                    <div className="small-news-header">
                        <h3>Latest Content</h3>
                    </div>
                
                    <NewsPreview className="small-news-preview" image={null} title="Is this the future of Armwrestling?" previewText="Lorem ipsum dolce gabanna hm versace indigo foxtrot..."/>
                    <NewsPreview className="small-news-preview" image={null} title="What happened to hard work?" previewText="Lorem ipsum dolce gabanna hm versace indigo foxtrot..."/>
                    <NewsPreview className="small-news-preview" image={null} title="What we can learn from Kazakhstan & Georgia" previewText="Lorem ipsum dolce gabanna hm versace indigo foxtrot..."/>

                    <div className="small-news-footer">
                        
                        <h3>More News</h3>
                        <svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="#FFF">
                            <polygon  points="155.139,77.566 79.18,1.596 79.18,45.978 0,45.978 0,109.155 79.18,109.155 79.18,153.542 ">
                                </polygon>
                                </svg>
                    </div>
                
                </div>
            </div>

            

        </div>
    )
}