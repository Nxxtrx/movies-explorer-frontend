import MainTitle from "../MainTitle/MainTitle"
import TimeMap from "../TimeMap/TimeMap"
import './AboutProject.css'

export default function AboutProject() {
  return(
    <div className="project">

      <MainTitle title = {'О проектe'} />

      <div className="project__container">
        <div className="project__component">
          <p className="project__title">Дипломный проект включал 5 этапов</p>
          <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__component">
          <p className="project__title">На выполнение диплома ушло 5 недель</p>
          <p className="project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <TimeMap />
    </div>
  )
}
