import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();  
  const homebutt = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={homebutt}>Home</button>
    </div>
  );
}

export default HomeButton;
