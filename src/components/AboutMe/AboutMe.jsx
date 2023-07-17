import MainTitle from '../MainTitle/MainTitle';
import Portfolio from '../Portfolio/Portfolio';
import MeImg from '../../images/me.png'

export default function AboutMe() {
  return (
    <div className="about">
      <MainTitle title = {'Студент'} />
      <div className="about__container">
        <div className="about__description">
          <p className="about__name">Денис</p>
          <p className="about__career">Фронтенд-разработчик, 25 лет</p>
          <p className="about__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="#" className="about__link">Github</a>
        </div>
        <img src={MeImg} alt="" />
      </div>
      <Portfolio />
    </div>
  );
}
