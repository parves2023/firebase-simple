import { FacebookAuthProvider, getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { OAuthProvider } from "firebase/auth";
import AuthContex from "../provider/AuthContext";

function Login() {
  const { user,setUser } = useContext(AuthContex);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const YahooProvider = new OAuthProvider('yahoo.com');
  const FacebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error ", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log(user);
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () =>{
    signInWithPopup(auth, GithubProvider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    setUser(user);
    
 
  }).catch((error) => {
    // Handle Errors here.

    const errorMessage = error.message;
    console.log(errorMessage);
    
  
  });
  }
  const handleYahooSignIn = ()=>{
    signInWithPopup(auth, YahooProvider)
  .then((result) => {
    console.log(result);
    
  })
  .catch((error) => {
    console.log(error.message);
    
  });
  }
  const handleFacebookSignIn = ()=>{
    signInWithPopup(auth, FacebookProvider)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
    })
    .catch((error) => {
      console.log("error ", error.message);
    });
  }

  return (
    <div>
      <p className="text-center">Login</p>
      {!user ? ( // Display login button if no user is logged in
        <div className="flex gap-3 justify-center my-5">
          <button className="btn" onClick={handleGoogleSignIn}>
          Login with Google
        </button>
        <button className="btn" onClick={handleGithubSignIn}>
          Login with Github
        </button>
        <button className="btn" onClick={handleYahooSignIn}>
          Login with Yahoo
        </button>
        <button className="btn" onClick={handleFacebookSignIn}>
          Login with Facebook
        </button>
        </div>
      ) : ( // Display sign-out button if a user is logged in
        <button className="btn" onClick={handleSignOut}>
          Sign Out
        </button>
      )}
      <br />

      {user && (
        <div>
          <h1>User: {user.displayName}</h1>
          {user.photoURL ? (
            <img src={user.photoURL} alt="User Profile" />
          ) : (
            <p>No profile photo available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
