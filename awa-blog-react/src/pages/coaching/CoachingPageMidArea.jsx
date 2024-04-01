import AthleteProfileBanner from "../../components/AthleteProfileBanner";
import MetalPipes from "/src/images/metalPipes.jpg"

class AthleteBio {
    constructor( athleteName, athletePhoto, athleteCredentials, athleteTechnique)
    {
        this.athleteName = athleteName;
        this.athletePhoto = athletePhoto;
        this.athleteCredentials = athleteCredentials;
        this.athleteTechnique = athleteTechnique;
    }
}

const athleteSlobodanNovakovic = new AthleteBio( "Slobodan Novaković", MetalPipes, "10x Serbian 90KG National Champion", "Top Roll, Hook");

export default function CoachingPageMidArea()
{
    return (
        <div className="home-page-mid-area">
            <div className="home-page-mid-title">
                <h3>Athletes Involved in Analysis</h3>

                <AthleteProfileBanner
                title={athleteSlobodanNovakovic.athleteName}
                image={athleteSlobodanNovakovic.image}
                accolades={athleteSlobodanNovakovic.athleteCredentials}>

                </AthleteProfileBanner>
            </div>
        </div>
    )
}