import MainTitle from "../MainTitle/MainTitle"
import './Techs.css'

export default function Techs() {
  return (
    <div className="tech">
      <div className="tech__container">
        <MainTitle title={"Технологии"} />
        <h3 className="tech__title">7 технологий</h3>
        <p className="tech__description">
          На курсе веб-разработки мы освоили технологии, которые&nbsp;применили
          в дипломном проекте.
        </p>
        <ul className="tech__list">
          <li className="tech__item">HTML</li>
          <li className="tech__item">CSS</li>
          <li className="tech__item">JS</li>
          <li className="tech__item">React</li>
          <li className="tech__item">Git</li>
          <li className="tech__item">Express.js</li>
          <li className="tech__item">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}
