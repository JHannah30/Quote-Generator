import './ToggleSpeechIcon.css';
import SelectedSpeech from '../images/speaker-icon-selected.png';
import UnselectedSpeech from '../images/speaker-icon.png';
import { useState, useEffect } from 'react';

const ToggleSpeechIcon = ({currentQuote}) => {
    
    const [speechIcon, setSpeechIcon] = useState(UnselectedSpeech);
    const synth = window.speechSynthesis;

    function stopSynth(){
        synth.cancel();
    }

    // Handling the text-to-speech feature when speech icon is clicked
    function handleSpeechClick(){

        // Stops current and queued sythnethised quotes if synth is currently playing
        if(synth.speaking){
            stopSynth();
        } else {
            const speechText = new SpeechSynthesisUtterance(`${currentQuote.author} once said, ${currentQuote.quote}`);
            setSpeechIcon(SelectedSpeech);
            synth.speak(speechText);
            console.log(speechText);

            // Returning icon to untoggled when speech ends
            speechText.onend = function(e) {
                setSpeechIcon(UnselectedSpeech);
            };
        }
    }

    useEffect(() => {
        stopSynth();
    }, [currentQuote])
    
    return ( 
        <>
            <img src={speechIcon} alt="Favourited icon. Selected." className="speech-icon" onClick={handleSpeechClick}/>
        </>
     );
}
 
export default ToggleSpeechIcon;