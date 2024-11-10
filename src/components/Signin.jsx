import React, { useState } from "react";

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";



function Signin() {

    const [user , setUser] = useState(null);

    const auth = getAuth();
   const handleSignin = (e)=>{
    e.preventDefault();
    console.log(e.target.email.value);
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const lodeduser = userCredential.user;
    setUser(lodeduser);
    console.log(user);
    
    // ...
})
.catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
    
    
   }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signin now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignin} className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signin</button>
              </div>
            </form>
            <div>
                {user && <div>{user.email}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
