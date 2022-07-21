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
        
        speechText.onend = function(e) {
            setSpeechIcon(UnselectedSpeech);
        };
    }

    // // Changes speaker icon when it is clicked. The icon will revert back to it's original image after the setTimeout completes
    // const toggleSpeechIcon = () => {
    //     setSpeechIcon(SelectedSpeech);
    //     setTimeout(() => {
    //         setSpeechIcon(UnselectedSpeech);
    //     }, 1000);
    // }

    
    return ( 
        <>
            <img src={speechIcon} alt="Favourited icon. Selected." className="speech-icon" onClick={handleSpeechClick}/>
        </>
     );
}
 
export default ToggleSpeechIcon;