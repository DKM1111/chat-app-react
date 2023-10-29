import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Dinesh-Chat</span>
        <span className="title" style={{color: 'blue'}}>Login</span>
        {err && <span style={{ color: 'red', textAlign: 'center', display: 'block' }}>Something went wrong</span>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" required/>
          <input type="password" placeholder="password" required/>
          <button>Sign in</button>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
