import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("/register", form);

      alert("Account created!");

      navigate("/login");

    } catch (err) {

      console.log(err.response?.data);
      alert("Registration failed");

    }

  };

  return (
    <form onSubmit={handleSubmit} className="glass">

      <h2>Create Account</h2>

      <input
        placeholder="Username"
        onChange={e =>
          setForm({...form, username: e.target.value})
        }
      />

      <input
        placeholder="Email"
        onChange={e =>
          setForm({...form, email: e.target.value})
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e =>
          setForm({...form, password: e.target.value})
        }
      />

      <button>Create Account</button>

    </form>
  );
}
