import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContex from "../provider/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { name, user, logOutUser } = useContext(AuthContex);
  console.log(name);

  const handleLogOut = () => {
    logOutUser();
  };

  return (
    <div className="flex gap-3 justify-center my-5">
      <Link className="btn" to="/">Home</Link>
      {
        user && <Link className="btn" to="/orders">Orders</Link>
      }
      <Link className="btn" to="/login">Login</Link>
      <Link className="btn" to="/signup">Sign Up Email</Link>
      <Link className="btn" to="/contex">Sign Up Email (Contex)</Link>
      <Link className="btn" to="/contexlogin">Login Email (Contex)</Link>
      <Link className="btn" to="/signin">Sign In Email</Link>

      {user ? (
        <div>
          <button onClick={handleLogOut} className="btn">Logout</button>
          <span className="text-xs ml-2">{user.email}</span>
        </div>
      ) : (
        <div onClick={() => navigate("/login")} className="btn">Please Login</div>
      )}
    </div>
  );
}

export default Header;
