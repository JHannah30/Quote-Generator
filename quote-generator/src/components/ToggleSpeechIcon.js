import './ToggleSpeechIcon.css';
import SelectedSpeech from '../images/speaker-icon-selected.png';
import UnselectedSpeech from '../images/speaker-icon.png';
import { useState, useEffect } from 'react';

const ToggleSpeechIcon = ({currentQuote}) => {
    
    const [speechIcon, setSpeechIcon] = useState(UnselectedSpeech);
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    function stopSynth(){
        synth.cancel();
    }

    // Handling the text-to-speech feature when speech icon is clicked
    function handleSpeechClick(){
        
        if(synth.speaking){
            stopSynth();
        } else {
            const speechText = new SpeechSynthesisUtterance(`${currentQuote.author} once said, ${currentQuote.quote}`);
            speechText.voice = voices[6];
            if(currentQuote.narrator === 'female') {
                speechText.voice = voices[5];
            }
            setSpeechIcon(SelectedSpeech);
            synth.speak(speechText);

            // Returning icon to untoggled when speech ends
            speechText.onend = function(e) {
                setSpeechIcon(UnselectedSpeech);
            };
        }
    }

    // Stops synth when a new quote is displayed
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