import React, { useRef } from "react";
import "./login.css";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const email = useRef();
  const password = useRef();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCred) => {
        if (userCred) {
          // if user was successfully logged in, redirect to home page.
          history.push("/#top");
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCred) => {
        // successsfully created a new user with email and password.
        if (userCred) {
          // if user was successfully created, redirect to home page.
          history.push("/login");
          // console.log(userCred);
        }
      })
      .catch((err) => alert(err.message));
  };

  const resetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email.current.value, {
      // push user back to login page after they finish reseting password.
      url: "http://localhost:3000/login",
    }).catch((err) => alert(err.message));
    alert("An email has been sent to your account.");
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" ref={email} required />

          <h5>Password</h5>
          <input type="password" ref={password} required />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the The Coffee House Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice. Just joking...
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>

        <p onClick={resetPassword} className="login__forgotPassword">
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
