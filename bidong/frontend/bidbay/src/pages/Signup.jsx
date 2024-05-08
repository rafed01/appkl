import AuthForm from "../components/AuthForm";

function Signup() {
  return (
    <div>
      <AuthForm route="/api/user/register/" method="signup" />
    </div>
  );
}

export default Signup;
