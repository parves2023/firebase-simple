import { useContext } from "react";
import AuthContex from "../provider/AuthContext";
import { Navigate } from "react-router-dom";

function PrivetRoute({ children }) {
  const {user,loading} = useContext(AuthContex);
  if (loading) {
    return <div className="text-5xl text-center text-red-600">Loading....</div>
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
}

export default PrivetRoute;
