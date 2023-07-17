import './Footer.css'

export default function Footer() {
  return(
    <div className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&#169; 2020</p>
        <div className="footer__link">
          <a className='footer__link-element' href="">Яндекс.Практикум</a>
          <a className='footer__link-element' href="">Github</a>
        </div>
      </div>
    </div>
  )
}
