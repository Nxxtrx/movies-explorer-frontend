import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { useEffect, useState } from 'react';

export default function MoviesCard({card, image, name, time, onLikecard, savedMovies, onDeleteCard}) {
  const location = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if(location.pathname === '/movies') {
      setIsLiked(savedMovies.some(element => element.movieId === card.id))
    }
  }, [handleLikeCard])

  function convertTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    if(hours === 0) {
      return `0ч ${minutes}м `
    } else {
      return `${hours}ч ${minutes}м `
    }
  }

  function handleLikeCard() {
    onLikecard(card)
  }

  function handleDeleteCard() {
    onDeleteCard(card._id)
  }

  return (
    <div className="card">
      <div className="card__container">
        {location.pathname === '/movies'
        ? <img className="card__image" src={"https://api.nomoreparties.co" + image} alt={name} />
        : <img className="card__image" src={card.image} alt={name} />
        }

        {location.pathname === '/movies'
        ? isLiked
          ? (
            <button className="card__remove-save" />
          ) : (
            <button className="card__save-btn" onClick={handleLikeCard}>Сохранить</button>
          )
        : <button className="card__save-btn card__save-btn_type_remove" onClick={handleDeleteCard}></button>
      }
        <div className="card__description">
          <p className="card__title">{name}</p>
          <p className="card__duration">{convertTime(time)}</p>
        </div>
      </div>
    </div>
  );
}

