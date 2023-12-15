// PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
  const auth = useAuth();

  return auth.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
