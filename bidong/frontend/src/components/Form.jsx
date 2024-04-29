import { useEffect, useState } from "react";
import api from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const currentRoute = route;

  const name = method === "login" ? "Login" : "Register";

  const handleUserName = (e) => {
    setUsername(e.target.value)
}
const handlePass = (e) => {
    setPassword(e.target.value)
}
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/user/regiter/", {
        username,
        password,
      });
      console.log('this is the post register');
      console.log(res.status);
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(username, password);
  }, [])

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={handleUserName}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={handlePass}
        placeholder="Password"
      />
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        {name}
      </button>
    </form>
  );
}

export default Form;
