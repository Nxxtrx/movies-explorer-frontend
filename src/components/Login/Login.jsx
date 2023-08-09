import { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Login({onAuthUser, errorMessage, loggedIn}) {

  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [])

  return(
    <main className="login">
      <AuthForm title="Рады видеть!" btnTitle='Войти' linkText='Еще не зарегестрированы?' linkTitle='Регистрация' onAuthUser={onAuthUser} errorMessage={errorMessage}/>
    </main>
  )
}
