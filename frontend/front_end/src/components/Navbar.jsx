import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";

export default function Navbar() {

  const { token, logout } = useAuth();

  return (
    <nav>

      <Link to="/">Books</Link>

      {token && (
        <>
          <Link to="/rentals">My Rentals</Link>

          <button onClick={logout}>
            Logout
          </button>
        </>
      )}

      {!token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

    </nav>
  );
}
