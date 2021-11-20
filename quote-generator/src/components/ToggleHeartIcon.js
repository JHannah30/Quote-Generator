import './ToggleHeartIcon.css';
import SelectedHeart from '../images/heart-selected.png';
import UnselectedHeart from '../images/heart-unselected.png';

const ToggleHeartIcon = ({ selectedIcon, handleSelectedIcon }) => {
    return ( 
        <div>
            { selectedIcon ? <img src={SelectedHeart} alt="Favourited icon. Selected." className="heart-icon" onClick={handleSelectedIcon} /> : <img src={UnselectedHeart} alt="Favourited icon. Unselected" className="heart-icon" onClick={handleSelectedIcon} /> }
        </div>
     );
}
 
export default ToggleHeartIcon;