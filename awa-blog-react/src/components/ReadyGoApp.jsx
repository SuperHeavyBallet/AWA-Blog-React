import { useState } from "react"

export default function ReadyGoApp()
{

    const [ callTypeSelected, setCallTypeSelected ] = useState("Ready-Go!");
    const [ intervalTypeSelected, setIntervalTypeSelected ] = useState("Fixed");
    const [ timeSelected, setTimeSelected ] = useState(3);
    const [ roundsSelected, setRoundsSelected ] = useState(0);
    const [ currentRound, setCurrentRound ] = useState(0);
    const [ testText, setTestText ] = useState("Start");


    const maxTime = 5;
    const minTime = 2000;

    function handleStartClick()
    {
        console.log(`Current: ${currentRound} , Selected: ${roundsSelected}`)
        if (currentRound <= roundsSelected)
        {
            setCurrentRound((current) => current + 1);
            setTestText("Wait");
            newRound();
        }

        else
        {
            setCurrentRound(0);
        }
        
    }

    function generateRandomTime()
    {
        
        const randomNumber = Math.floor(Math.random() * (maxTime + 1));
        return randomNumber;
    }

    function timeout(delay)
    {
        return new Promise( res => setTimeout(res, delay));
    }

    async function newRound()
    {
        let finalTime;

        if (intervalTypeSelected === "Random")
        {
            const randomWaitTime = generateRandomTime();
            finalTime = (randomWaitTime * 1000) + minTime;
        }
        else if (intervalTypeSelected === "Fixed")
        {
            const fixedWaitTime = timeSelected;
            finalTime = (fixedWaitTime * 1000);
        }
        console.log(finalTime);
        await timeout(finalTime);
        setTestText("Ready Go!");
        await timeout(1000);
        setTestText("Start");

        if (currentRound <= roundsSelected)
        {
            handleStartClick();
        }

        else
        {
            setCurrentRound(0);
        }


    }


    return(
        <div className="ready-go-container">
            <form className="ready-go-input">
                <div className="ready-go-input-area">
                    <label> Call Type:</label>
                    <select value={callTypeSelected} onChange={(e) => setCallTypeSelected(e.target.value)}>
                        <option value="Go!">Go!</option>
                        <option value="Ready-Go!">Ready Go!</option>
                    </select>
                </div>

                <div className="ready-go-input-area">
                <label>Interval Type:</label>
                <select value={intervalTypeSelected} onChange={(e) => setIntervalTypeSelected(e.target.value)}>
                    <option value="Fixed">Fixed</option>
                    <option value="Random">Random</option>
                </select>
                </div>

                <div className="ready-go-input-area">
                    <label>Time Interval:</label>
                        <select value={timeSelected} onChange={(e) => setTimeSelected(e.target.value)}>
                        <option value="3">3 Seconds</option>
                        <option value="4">4 Seconds</option>
                        <option value="5">5 Seconds</option>
                        <option value="6">6 Seconds</option>
                        <option value="7">7 Seconds</option>
                        <option value="8">8 Seconds</option>
                        <option value="9">9 Seconds</option>
                        <option value="10">10 Seconds</option>
                    </select>
                </div>

                <div className="ready-go-input-area">
                    <label>Number of Rounds:</label>
                    <select value={roundsSelected} onChange={(e) => setRoundsSelected(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </form>

            <div className="ready-go-display-stats">
                <h3>Call Type: {callTypeSelected}</h3>
                <h3>Interval Type: {intervalTypeSelected}</h3>
                <h3>Time: {timeSelected}</h3>
                <h3>Rounds: {roundsSelected}</h3>
                <h3>Round: {currentRound}</h3>
            </div>
        <div className="ready-go-button-area">
            <button className="ready-go-button" type="button" onClick={handleStartClick}>{testText}</button>
            </div>

        </div>
    )
}