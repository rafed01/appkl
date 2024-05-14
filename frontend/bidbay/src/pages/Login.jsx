import AuthForm from "../components/AuthForm";

function Login() {
  return (
    <div>
      <AuthForm route="/api/token/" method="login" />
    </div>
  );
}

export default Login;
