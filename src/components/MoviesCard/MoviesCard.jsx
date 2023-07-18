import './MoviesCard.css'

export default function MoviesCard({image, name, time}) {
  return(
      <div className="card">
      <div className="card__container">
        <img className="card__image" src={`${image}`} alt="" />
        <div className='card__description'>
          <p className="card__title">{name}</p>
          <p className='card__duration'>{time}</p>
        </div>

      </div>
    </div>
  )
}
