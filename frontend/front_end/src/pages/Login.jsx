import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post("/login", {
        email,
        password
      });

      login(res.data.token);

      navigate("/");

    } catch (err) {

      console.log(err.response?.data);
      alert("Invalid email or password");

    }

  };

  return (
    <form onSubmit={handleLogin} className="glass">

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button>Login</button>

    </form>
  );
}
