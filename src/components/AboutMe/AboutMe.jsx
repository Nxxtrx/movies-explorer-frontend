import MainTitle from '../MainTitle/MainTitle';
import Portfolio from '../Portfolio/Portfolio';
import MeImg from '../../images/mk.gif'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <section className="about">
      <MainTitle title = {'Студент'} />
      <div className="about__container">
        <div className="about__description">
          <p className="about__name">Денис</p>
          <p className="about__career">Фронтенд-разработчик, 25 лет</p>
          <p className="about__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-&nbsp;разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="https://github.com/Nxxtrx?tab=repositories" className="about__link" target='blank'>Github</a>
        </div>
        <img className='about__img' src={MeImg} alt="Фотография разработчика приложения" />
      </div>
      <Portfolio />
    </section>
  );
}
