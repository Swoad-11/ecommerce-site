import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/slices/authSlice";

// Sends guests to /login and remembers where they were heading.
const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
