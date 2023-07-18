import cardList from '../../utils/constants'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList() {

  return(
    <div className="cards">
      <div className='cards__list'>
        {cardList.map((item) => <MoviesCard image={item.image} name={item.name} time={item.time} />)}
      </div>
      <div className='cards__more-container'>
        <button className='cards__btn-more' type='submit'>Еще</button>
      </div>
    </div>
  )
}
