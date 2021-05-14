import React, { useState } from "react";
import { Link ,useHistory } from "react-router-dom";
import "./Login.css";
import {db,auth} from "./firebase"
function Login() {
    const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailHandler = (event) => {
      setEmail(event.target.value);
  }
  const passwordHandler = (event) => {
      setPassword(event.target.value);
  }
  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((auth)=>{
        console.log(auth);
        if(auth){
            history.push('/');
        }
    }).catch(error => alert(error.message))
    
}

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        console.log(auth);
        if(auth){
            history.push('/');
        }
    }).catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" onChange={emailHandler} value={email}></input>
          <h5>Password</h5>
          <input type="password" onChange={passwordHandler} value={password}></input>
          <button type="submit" className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
