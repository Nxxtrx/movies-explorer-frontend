import lendingLogo from '../../images/landing-logo.svg';
import './Promo.css'

export default function Promo() {
    return (
      <section className="promo">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>

          <img className="promo__img" src={lendingLogo} alt="Логотип сайта" />
          <div className='clearfix' ></div>
        </div>
      </section>
    );
}
