import AuthForm from "../AuthForm/AuthForm"

export default function Register(){
  return(
    <main className="register">
      <AuthForm title="Добро пожаловать!" btnTitle='Зарегестрироваться' linkText='Уже зарегестрированы?' linkTitle='Войти' />
    </main>
  )
}
