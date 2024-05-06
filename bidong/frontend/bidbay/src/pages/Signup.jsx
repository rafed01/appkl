import AuthForm from "../components/AuthForm";
import HomeButton from "../components/HomeButton";

function Signup() {
  return (
    <div>
      <HomeButton />
      <AuthForm route="/api/user/register/" method="signup" />
    </div>
  );
}

export default Signup;
