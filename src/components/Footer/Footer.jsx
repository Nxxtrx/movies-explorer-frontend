import './Footer.css'

export default function Footer() {
  return(
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&#169; 2023</p>
        <div className="footer__link">
          <a className='footer__link-element' href="https://practicum.yandex.ru/" target='blank'>Яндекс.Практикум</a>
          <a className='footer__link-element' href="https://github.com/" target='blank'>Github</a>
        </div>
      </div>
    </footer>
  )
}
