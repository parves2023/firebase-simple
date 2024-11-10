import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.init'
function Login() {
    const auth = getAuth(app);
    const provider =new GoogleAuthProvider();

    const handleGoogleLogin = ()=>{
        signInWithPopup(auth,provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            
            
          }).catch((error) => {
            
            const errorMessage = error.message;
            console.log(errorMessage);
            
          });
    }
  return (
    
    <div>
        <button onClick={handleGoogleLogin}>Google login</button>
    </div>
  )
}

export default Login