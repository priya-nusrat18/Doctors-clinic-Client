
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import LoginBg from '../../image/Group 140.png'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "./FirebaseConfig";
import Navbars from "../Shared/Navbar/Navbars";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }


const Login = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isSignedIn: false,
    error: "",
  });
  console.log(loggedInUser);
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  
  const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            var { displayName, email , photoURL } = result.user;
            console.log(result.user);
            const userDetails = { ...user };
            userDetails.googleName = displayName;
            userDetails.isSignedIn = true;
            userDetails.email = email;
            userDetails.photoURL = photoURL;
            setUser(userDetails);
            setLoggedInUser(userDetails)
            history.replace(from);
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
            const userDetails = { ...user };
            userDetails.error = errorMessage;
            setUser(userDetails);
            setLoggedInUser(userDetails);
          });
      
  };
    return (
        <div className="login-page container">
          <Navbars />
      <div className="row align-items-center" style={{ height: "100vh" }}>
        
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Login;