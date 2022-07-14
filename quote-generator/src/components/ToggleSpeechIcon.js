import './ToggleSpeechIcon.css';
import SelectedSpeech from '../images/speaker-icon-selected.png';
import UnselectedSpeech from '../images/speaker-icon.png';
import { useState } from 'react';

const ToggleSpeechIcon = ({}) => {

    // const [speakerSelected, setSpeakerSelected] = useState(false);
    const [speechIcon, setSpeechIcon] = useState(UnselectedSpeech);

    // Changes speaker icon when it is clicked. The icon will revert back to it's original image after the setTimeout completes
    const toggleSpeechIcon = () => {
        setSpeechIcon(SelectedSpeech);
        setTimeout(() => {
            setSpeechIcon(UnselectedSpeech);
        }, 1000);
    }

    return ( 
        <>
            <img src={speechIcon} alt="Favourited icon. Selected." className="speech-icon" onClick={toggleSpeechIcon}/>
        </>
     );
}
 
export default ToggleSpeechIcon;