import AuthForm from "../AuthForm/AuthForm"

export default function Register({onRegisterUser, onAuthUser, errorMessage}){
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
