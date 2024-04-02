import AthleteProfileBanner from "../../components/AthleteProfileBanner";
import MetalPipes from "../../images/metalPipes.jpg"
import { useState } from "react";

class AthleteBio {
    constructor( athleteID, athleteName, athletePhoto, athleteCredentials, athleteTechnique)
    {
        this.id = athleteID;
        this.athleteName = athleteName;
        this.athletePhoto = athletePhoto;
        this.athleteCredentials = athleteCredentials;
        this.athleteTechnique = athleteTechnique;
    }
}

const athleteSlobodanNovakovic = new AthleteBio( 0,"Slobodan Novaković", MetalPipes, "10x Serbian 90KG National Champion", "Top Roll, Hook");
const athleteDarkoSreckovic = new AthleteBio( 1, "Darko Sreckovic", MetalPipes, "8x Serbian 90KG National Champion", "Top Roll, Hook");
const athleteKrasimirKostadinov = new AthleteBio( 2, "Krasimir Kostadinov", MetalPipes, "8x Bulgarian 110kg National Champion", "Hook");


const smallAthleteList = [
    athleteSlobodanNovakovic,
    athleteDarkoSreckovic,
    athleteKrasimirKostadinov
]

const largeAthleteList = [
    athleteSlobodanNovakovic,
    athleteDarkoSreckovic,
    athleteKrasimirKostadinov,
    athleteSlobodanNovakovic,
    athleteDarkoSreckovic,
    athleteKrasimirKostadinov,
    athleteKrasimirKostadinov,
    athleteSlobodanNovakovic,
    athleteDarkoSreckovic,
    athleteKrasimirKostadinov
]



export default function CoachingPageMidArea()
{
    const [ displayAthletes, setDisplayAthletes ]= useState(smallAthleteList);
    const [ buttonText, setButtonText ] = useState("See More Athletes");
    const [ displayClass, setDisplayClass ] = useState("coaching-page-athlete-profile-flex");

    function handleSeeMoreClick()
    {
        if (displayAthletes === smallAthleteList)
        {
            setDisplayAthletes(largeAthleteList);
            setDisplayClass("coaching-page-athlete-profile-grid")
            setButtonText("See Less Athletes");
        }
        else
        {
            setDisplayAthletes(smallAthleteList);
            setDisplayClass("coaching-page-athlete-profile-flex");
            setButtonText("See More Athletes");
        }
        
    }
    return (
        <div className="coaching-page-mid-area">
            <div className="coaching-page-mid-title">
                <div className="coaching-page-title">
                <h3>Athletes Involved in Analysis</h3>
                    </div>
                </div>
            <div className={displayClass}>
                {displayAthletes.map((athlete) => (
                    <AthleteProfileBanner
                    key={athlete.id}
                    title={athlete.athleteName}
                    image={athlete.athletePhoto}
                    accolades={athlete.athleteCredentials}
                    technique={athlete.athleteTechnique}
                    />
                ))}
                
                </div>

                <div className="athlete-see-more-button">
                    <button onClick={handleSeeMoreClick}>
                        <h4>{buttonText}</h4>
                        </button>
                </div>
                


            
        </div>
    )
}