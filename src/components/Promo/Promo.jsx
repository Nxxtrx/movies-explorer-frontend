import lendingLogo from '../../images/landing-logo.svg';
import './Promo.css'

export default function Promo() {
    return(
        <div className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
            <img src={lendingLogo} alt="" />
        </div>
    )
}
