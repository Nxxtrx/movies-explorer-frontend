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
          ? cardList.map((item) => <MoviesCard image={item.image} name={item.name} time={item.time} cardAdded={item.cardAdded}/>)
          : addedMovies.map((item) => <MoviesCard image={item.image} name={item.name} time={item.time} cardAdded={item.cardAdded}/>)
        }
      </div>
      {location.pathname === '/movies'
        ? <div className='cards__more-container'>
            <button className='cards__btn-more' type='submit'>Еще</button>
          </div>
        : <></>
      }
    </div>
  )
}



