import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return <Navigate replace state={location.pathname} to="/login" />;
  }
  if (loading) {
    return (
      <div className="mx-auto flex items-center justify-center">
        <span className="loading mt-20 loading-infinity loading-lg"></span>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
