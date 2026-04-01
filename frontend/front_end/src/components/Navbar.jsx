import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Books</Link>
      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/rentals">Rentals</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
