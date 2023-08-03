import { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm"
import { useNavigate } from "react-router-dom";

export default function Register({onRegisterUser, onAuthUser, errorMessage, loggedIn}){

  const navigate = useNavigate();

  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [])


  return (
    <main className="register">
      <AuthForm
        title="Добро пожаловать!"
        btnTitle="Зарегестрироваться"
        linkText="Уже зарегестрированы?"
        linkTitle="Войти"
        onRegisterUser={onRegisterUser}
        onAuthUser={onAuthUser}
        errorMessage={errorMessage}
      />
    </main>
  );
}
