// PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
  const auth = useAuth();

  return auth.token ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
