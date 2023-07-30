import { useLocation } from 'react-router-dom'
import cardList from '../../utils/constants'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList({movies, searchFilm}) {

  const addedMovies = cardList.slice(0,3)
  const location = useLocation();
  console.log(searchFilm)
  console.log(movies)

  const searchMoviesList = movies.filter(function(movie) {
    return movie.nameRU.toLowerCase().includes(searchFilm.toLowerCase())
  })

  return(
    <div className="cards">
      <div className='cards__list'>
        {location.pathname === '/movies'
          ? searchMoviesList.map((item) => <MoviesCard image={item.image.url} name={item.nameRU} time={Number(item.duration)}/>)
          : addedMovies.map((item) => <MoviesCard key={item.id} image={item.image.url} name={item.name} time={item.time} cardAdded={item.cardAdded}/>)
        }
      </div>
      <div className={`cards__more-container ${location.pathname=== '/saved-movies' ? "cards__more-container_type_empty" : ''}` } >
        <button className={`cards__btn-more ${location.pathname=== '/movies' ? "cards__btn-more_type_active" : ''}`} type='submit'>Еще</button>
      </div>
    </div>
  )
}



// cardList.map((item) => <MoviesCard key={item.id} image={item.image} name={item.name} time={item.time} cardAdded={item.cardAdded}/>)
