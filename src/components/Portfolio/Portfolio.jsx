import portfolioLink from '../../images/portfolio-link.svg'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <p className="portfolio__title-element">Статичный сайт</p>
          <a className="portfolio__link" href="https://nxxtrx.github.io/how-to-learn/" target='blank'>
            <img className="portfolio__img-link" src={portfolioLink} alt="" />
          </a>
        </li>
        <li className="portfolio__element">
          <p className="portfolio__title-element">Адаптивный сайт</p>
          <a className="portfolio__link" href="https://nxxtrx.github.io/russian-travel/" target='blank'>
            <img className="portfolio__img-link" src={portfolioLink} alt="" />
          </a>
        </li>
        <li className="portfolio__element">
          <p className="portfolio__title-element">Одностраничное приложение</p>
          <a className="portfolio__link" href="https://github.com/Nxxtrx/react-mesto-api-full-gha" target='blank'>
            <img className="portfolio__img-link" src={portfolioLink} alt="Иконка ссылки для перехода в проекты портфолио" />
          </a>
        </li>
      </ul>
    </div>
  );
}
