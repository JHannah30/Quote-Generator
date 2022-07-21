import './ToggleSpeechIcon.css';
import SelectedSpeech from '../images/speaker-icon-selected.png';
import UnselectedSpeech from '../images/speaker-icon.png';
import { useState } from 'react';

const ToggleSpeechIcon = ({currentQuoteText}) => {
    
    const [speechIcon, setSpeechIcon] = useState(UnselectedSpeech);

    // Handling the text-to-speech feature. Plays quote using HTML5 text-to-speech, toggling the icon when the speech starts/finishes
    function handleSpeechClick(){
        const speechText = new SpeechSynthesisUtterance(currentQuoteText);
        setSpeechIcon(SelectedSpeech);
        window.speechSynthesis.speak(speechText);
        console.log(speechText)

        // Returning icon to untoggled when speech ends
        speechText.onend = function(e) {
            setSpeechIcon(UnselectedSpeech);
        };
    }

    
    return ( 
        <>
            <img src={speechIcon} alt="Favourited icon. Selected." className="speech-icon" onClick={handleSpeechClick}/>
        </>
     );
}
 
export default ToggleSpeechIcon;