import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { useEffect, useState } from 'react';
import { DURATION, SMALL_SCREEN, AVERAGE_SCREEN, NUMBER_CARD_AVERAGE_SCREEN, NUMBER_CARD_HIGHT_SCREEN, NUMBER_CARD_LOW_SCREEN } from '../../utils/constants'

export default function MoviesCardList({movies, isChecked, onLikecard, savedMovies, onDeleteCard, errorMessage, isSearchFilms}) {

  const location = useLocation();

  const [saveRequest, setSaveRequest] = useState(JSON.parse(localStorage.getItem('movies')) || [])

  const [filterMoviesList, setFilterMoviesList] = useState([])
  const [showedCard, setShowedCard] = useState([])
  const [loadMore, setLoadMore] = useState(NUMBER_CARD_HIGHT_SCREEN)
  const [isWideScreen, setIsWideScreen] = useState(true)

  useEffect(() => {
    updateCardsOnScreen();
    updateShowedCards()
    if(location.pathname === '/movies') {
      localStorage.setItem('movies', JSON.stringify(filterMoviesList));
    }
  }, [filterMoviesList])

  useEffect(() => {
    setFilterMoviesList(movies)

    if(isChecked) {
      setFilterMoviesList(movies.filter(function(movie) {
        return movie.duration <= DURATION
      }))
      setSaveRequest(filterMoviesList)
    }
    setSaveRequest(filterMoviesList)

  }, [movies, isChecked, isSearchFilms])

  useEffect(() => {
    if(location.pathname === '/movies') {
      setSaveRequest(filterMoviesList)
      localStorage.setItem('movies', JSON.stringify(saveRequest))
    }
  }, [isSearchFilms])

  const updateShowedCards = () => {
    if(!errorMessage){
      setShowedCard(filterMoviesList.slice(0, loadMore))
    }
  }

  const updateCardsOnScreen = () => {
    if(window.innerWidth < SMALL_SCREEN ) {
      setIsWideScreen(false)
      setLoadMore(NUMBER_CARD_LOW_SCREEN)
    } else if(window.innerWidth < AVERAGE_SCREEN) {
      setIsWideScreen(false);
      setLoadMore(NUMBER_CARD_AVERAGE_SCREEN)
    } else {
      setIsWideScreen(true);
      setLoadMore(NUMBER_CARD_HIGHT_SCREEN)
    }
  }

  function handleLoadMore() {
    setLoadMore((count) => count + (isWideScreen ? 3 : 2))
  }

  useEffect(() => {
    updateShowedCards()
  }, [loadMore, filterMoviesList])


  useEffect(() => {
    window.addEventListener('resize', updateCardsOnScreen)
    return () => window.removeEventListener('resize', updateCardsOnScreen)
  }, [isWideScreen, filterMoviesList])

  return(
    <div className="cards">
      {errorMessage || showedCard.length === 0 ? <p className='cards__error'>{errorMessage ? errorMessage : 'Ничего не найдено'}</p>
        : (
          <div className='cards__list'>
            {showedCard.map((item) => <MoviesCard key={item.id || item._id} card={item} onLikecard={onLikecard} image={item.image.url} name={item.nameRU} time={Number(item.duration)} savedMovies={savedMovies} onDeleteCard={onDeleteCard}/>) }
          </div>
        )
      }
      <div className={`cards__more-container ${location.pathname=== '/saved-movies' ? "cards__more-container_type_empty" : ''}` } >
        {!errorMessage && filterMoviesList.length > loadMore ? (
          <button className='cards__btn-more cards__btn-more_type_active' type='click' onClick={handleLoadMore}>Еще</button>
        ) : ''
        }
      </div>
    </div>
  )
}
