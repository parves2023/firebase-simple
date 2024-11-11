import AuthContex from "./AuthContext";
import PropTypes from "prop-types";

function AuthProvider({ children }) {
  const authInfo = {
    name: "Nodi Sagor Khal Bil ...",
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
