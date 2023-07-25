import { useLocation } from 'react-router-dom'
import cardList from '../../utils/constants'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList() {

  const addedMovies = cardList.slice(0,3)
  const location = useLocation();
  return(
    <div className="cards">
      <div className='cards__list'>
        {location.pathname === '/movies'
          ? cardList.map((item) => <MoviesCard key={item.id} image={item.image} name={item.name} time={item.time} cardAdded={item.cardAdded}/>)
          : addedMovies.map((item) => <MoviesCard key={item.id} image={item.image} name={item.name} time={item.time} cardAdded={item.cardAdded}/>)
        }
      </div>
      <div className={`cards__more-container ${location.pathname=== '/saved-movies' ? "cards__more-container_type_empty" : ''}` } >
        <button className={`cards__btn-more ${location.pathname=== '/movies' ? "cards__btn-more_type_active" : ''}`} type='submit'>Еще</button>
      </div>
    </div>
  )
}



