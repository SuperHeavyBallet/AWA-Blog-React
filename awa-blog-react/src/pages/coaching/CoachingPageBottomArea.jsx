import { Link } from "react-router-dom";
import TextSampleCard from "../../components/TextSampleCard"

const text1 = [
    "The Hungarian competitor is very weak in the cup and back pressure, he didn't even seem to use it. ",
    "He did use pronation with a low hand in an attempt to pull out the opponent's arm and unlock his cup. ",
    "The guy who won controlled his cupping very well and didn't let the opponent open it. He waited for him to get tired and drew him into the hook while improving his angles along with side pressure so that he could open the opponent and finish easily. ",
    "Technically, neither one nor the other is anything special, but endurance and a stronger cup were on the side of the winner, these were the deciding factors. "
];

const text2 = [
    "Excellent technique, no real technical issues. It’s a half top roll with strong and aggressive back pressure. ",
    "The problem is that his pronation is somewhat weak compared to his other strengths and he is not able to get strong and fast hookers into an effective position at the start because pronation is lacking.",
    "As soon as someone is able to disable his pronation with a cup, he loses.",
    "If he would include stronger pronation alongside a strong cup, he would be much more successful in general. Of course the specifics of the exact requirements will vary depending on the opponent.",
    "So overall, he should work on stronger, but more importantly more technical involvement of pronation, otherwise he is a good puller."
];

const text3 = [
    "He needs to improve the ability to escape for the strap, as it is now he tries but ends up in a very compromised position where he does nothing except exhaust his fingers and wrist. From what you can see of the start of this match, his elbow seems to open up excessively as he pulls, showing weak connection via biceps and back pressure.",
    "In the straps, he doesn’t use enough pronation,  his rising drops and most importantly, he doesn’t hit aggressively enough. He waits and holds then allows the opponent to drop into a kings move, which makes the match more difficult than it needed to be.",
    "The 2nd match is a little better, but still the bicep and back pressure open up a little too much and the cup doesn’t seem to be particularly strong.",
    "In the final strap round, he again sits and waits, allowing the opponent to pronate through his cup and gain leverage and has to rely purely on side pressure to push through to the pad.",
    "Overall, he should strengthen his cupping, pronation and practice connecting the wrist, elbow flexors and back muscles so that the arm is not so easily separated from the body, this will be a key part of improving his performance."
];

export default function CoachingPageBottomArea()
{
    return(
        <div>
            <div className="example-analysis-exerpts">
                <h4>Example Analysis Exerpts:</h4>
                
            </div>
            <TextSampleCard analysisBy="Slobodan Novakovic" text={text1} titlePosition="left" />
            <TextSampleCard analysisBy="Slobodan Novakovic" text={text2} titlePosition="right"/>
            <TextSampleCard analysisBy="Slobodan Novakovic" text={text3} titlePosition="left" />
        
        
        <Link to="/coaching" >
            <div className="coaching-page-head-area">
            <div className="coaching-page-title">
                <h3>Submit Your Videos - Get Analysed by Elite Athletes</h3>
            </div>
            </div>
        </ Link>
        </div>
    )
}