import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

export default function ProtectedRoute({ children }) {

  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;

}
