
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContex from "../provider/AuthContext";

function Header() {
  const { name } = useContext(AuthContex);
  console.log(name);

  return (
    <div className="flex gap-3 justify-center my-5">
      <Link className="btn" to="/">home</Link>
      <Link className="btn" to="/login">Login</Link>
      <Link className="btn" to="/signup">sign up email</Link>
      <Link className="btn" to="/contex">sign up email (contex)</Link>
      <Link className="btn" to="/contexlogin">Login email (contex)</Link>
      <Link className="btn" to="/signin">sign in email</Link>
      
    </div>
  );
}

export default Header;
