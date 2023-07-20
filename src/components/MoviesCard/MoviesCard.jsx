import { useLocation } from 'react-router-dom';
import './MoviesCard.css'
import saveCardIcon from '../../images/save-icon.svg'

export default function MoviesCard({image, name, time, cardAdded}) {
  const location = useLocation();

  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={`${image}`} alt="" />
        {location.pathname === '/movies'
        ? cardAdded
          ? (
            <img className="card__remove-save" src={saveCardIcon} alt=''/>
          ) : (
            <button className="card__save-btn">Сохранить</button>
          )
        : <button className="card__save-btn card__save-btn_type_remove"></button>
      }
        <div className="card__description">
          <p className="card__title">{name}</p>
          <p className="card__duration">{time}</p>
        </div>
      </div>
    </div>
  );
}

