import AuthForm from "../components/AuthForm";
import HomeButton from "../components/HomeButton";

function Login() {
  return (
    <div>
      <HomeButton />
      <AuthForm route="/api/token/" method="login" />
    </div>
  );
}

export default Login;
