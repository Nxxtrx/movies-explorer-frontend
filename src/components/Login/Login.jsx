import AuthForm from "../AuthForm/AuthForm";

export default function Login() {
  return(
    <main className="login">
      <AuthForm title="Рады видеть!" btnTitle='Войти' linkText='Еще не зарегестрированы?' linkTitle='Регистрация' />
    </main>
  )
}
