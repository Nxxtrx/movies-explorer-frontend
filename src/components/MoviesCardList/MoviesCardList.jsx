import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { useEffect, useState } from 'react';

export default function MoviesCardList({movies, isChecked, onLikecard, savedMovies, onDeleteCard}) {

  const location = useLocation();
  const [filterMoviesList, setFilterMoviesList] = useState([])
  const [showedCard, setShowedCard] = useState([])
  const [loadMore, setLoadMore] = useState(12)
  const [isWideScreen, setIsWideScreen] = useState(true)

  useEffect(() => {
    updateCardsOnScreen();
  }, [])

  useEffect(() => {
    setFilterMoviesList(movies)

    if(isChecked) {
      setFilterMoviesList(movies.filter(function(movie) {
        return movie.duration <= 40
      }))
    }

  }, [movies, isChecked])

  // useEffect(() => {
  //   localStorage.setItem('movies', JSON.stringify(filterMoviesList))
  // }, [filterMoviesList])

  const updateShowedCards = () => {
    setShowedCard(filterMoviesList.slice(0, loadMore))
  }

  const updateCardsOnScreen = () => {
    if(window.innerWidth < 690 ) {
      setIsWideScreen(false)
      setLoadMore(5)
    } else if(window.innerWidth < 1020) {
      setIsWideScreen(false);
      setLoadMore(8)
    } else {
      setIsWideScreen(true);
      setLoadMore(12)
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
      <div className='cards__list'>
        {showedCard.map((item) => <MoviesCard key={item.id || item._id} card={item} onLikecard={onLikecard} image={item.image.url} name={item.nameRU} time={Number(item.duration)} savedMovies={savedMovies} onDeleteCard={onDeleteCard}/>) }
      </div>
        <div className={`cards__more-container ${location.pathname=== '/saved-movies' ? "cards__more-container_type_empty" : ''}` } >
          {filterMoviesList.length > loadMore ? (
            <button className={`cards__btn-more ${location.pathname=== '/movies' ? "cards__btn-more_type_active" : ''}`} type='click' onClick={handleLoadMore}>Еще</button>
          ) : ''
        }
        </div>
    </div>
  )
}
