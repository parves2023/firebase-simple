

import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext } from "react";
import AuthContex from "../provider/AuthContext";
import app from "../firebase/firebase.init";



function Signup() {
  const {name} = useContext(AuthContex);
    const auth = getAuth(app);
   const handleSignUp = (e)=>{
    e.preventDefault();
    console.log(e.target.email.value);
    const email = e.target.email.value;
    const name = e.target.name.value;
    const Photolink = e.target.Photolink.value;
    const password = e.target.password.value;

    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);


    updateProfile(auth.currentUser, {
      displayName: name, photoURL: Photolink
    }).then(() => {
      console.log("// Profile updated!");
      
      
    }).catch((error) => {
      console.log(error.message);
      
    });




    sendEmailVerification(auth.currentUser)
  .then(() => {
    alert("please check and varify your email.");
  });
})
.catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    
    
   }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now! {name}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photolink</span>
                </label>
                <input
                  type="text"
                  placeholder="Photolink"
                  name="Photolink"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
