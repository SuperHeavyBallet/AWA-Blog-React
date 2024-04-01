import AthleteProfileBanner from "../../components/AthleteProfileBanner";
import MetalPipes from "../../images/metalPipes.jpg"

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
const athleteDarkoSreckovic = new AthleteBio( "Darko Sreckovic", MetalPipes, "8x Serbian 90KG National Champion", "Top Roll, Hook");
const athleteKrasimirKostadinov = new AthleteBio( "Krasimir Kostadinov", MetalPipes, "8x Bulgarian 110kg National Champion", "Hook");

export default function CoachingPageMidArea()
{
    return (
        <div className="coaching-page-mid-area">
            <div className="coaching-page-mid-title">
                <h3>Athletes Involved in Analysis</h3>

                <AthleteProfileBanner
                linkDestination="https://www.google.com"
                title={athleteSlobodanNovakovic.athleteName}
                image={athleteSlobodanNovakovic.athletePhoto}
                accolades={athleteSlobodanNovakovic.athleteCredentials}
                technique={athleteSlobodanNovakovic.athleteTechnique}>
                </AthleteProfileBanner>

                <AthleteProfileBanner
                linkDestination="https://www.google.com"
                title={athleteDarkoSreckovic.athleteName}
                image={athleteDarkoSreckovic.athletePhoto}
                accolades={athleteDarkoSreckovic.athleteCredentials}
                technique={athleteDarkoSreckovic.athleteTechnique}>
                </AthleteProfileBanner>

                <AthleteProfileBanner
                linkDestination="https://www.google.com"
                title={athleteKrasimirKostadinov.athleteName}
                image={athleteKrasimirKostadinov.athletePhoto}
                accolades={athleteKrasimirKostadinov.athleteCredentials}
                technique={athleteKrasimirKostadinov.athleteTechnique}>
                </AthleteProfileBanner>

                


            </div>
        </div>
    )
}