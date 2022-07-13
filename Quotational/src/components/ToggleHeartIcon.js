import './ToggleHeartIcon.css';
import SelectedHeart from '../images/heart-selected.png';
import UnselectedHeart from '../images/heart-unselected.png';

const ToggleHeartIcon = ({ 
    quoteFavourited,
    handleSelectedIcon
}) => {

    return ( 
        <div className="heart-container">
            { quoteFavourited ? <img src={SelectedHeart} alt="Favourited icon. Selected." className="heart-icon" onClick={handleSelectedIcon} /> : <img src={UnselectedHeart} alt="Favourited icon. Unselected" className="heart-icon" onClick={handleSelectedIcon} /> }
        </div>
     );
}
 
export default ToggleHeartIcon;