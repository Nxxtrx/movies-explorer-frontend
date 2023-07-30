import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard({image, name, time, cardAdded}) {
  const location = useLocation();

  function convertTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    if(hours === 0) {
      return `0ч ${minutes}м `
    } else {
      return `${hours}ч ${minutes}м `
    }
  }

  return (
    <div className="card">
      <div className="card__container">
        <img className="card__image" src={"https://api.nomoreparties.co" + image} alt={name} />
        {location.pathname === '/movies'
        ? cardAdded
          ? (
            <button className="card__remove-save" />
          ) : (
            <button className="card__save-btn">Сохранить</button>
          )
        : <button className="card__save-btn card__save-btn_type_remove"></button>
      }
        <div className="card__description">
          <p className="card__title">{name}</p>
          <p className="card__duration">{convertTime(time)}</p>
        </div>
      </div>
    </div>
  );
}

