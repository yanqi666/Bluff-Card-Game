import React from 'react'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.js';
import "./Login.css"

function SignUp({ changeScene }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButtonPressed = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      alert("Login Successful");
      changeScene("mainmenu");
    } catch (error) {
      console.log('Error logging in:', error.code);
    }
  };

  const handleChangeToSignUp = () => {
    changeScene("signup")
  }

  useEffect(() => {
    // Add CSS CDN for Semantic UI (as an example)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css';
    document.head.appendChild(link);

    // Clean up after component unmounts
    return () => {
        document.head.removeChild(link);
      };
  }, []);


  return (
    <div className='login'>
        <div className="ui segment grey login-form">
            <form className="ui form" onSubmit={loginButtonPressed}>
            <div className="ui stacked segment">
                <div className="field">
                <div className="ui left icon input">
                    <i className="mail icon"></i>
                    <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    />
                </div>
                </div>
                <div className="field">
                <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    />
                </div>
                </div>
                <button className="ui button green fluid" type="submit" id="login-btn">LOGIN</button>
            </div>
            </form>
            <div className="ui message small">
            Need an account? <button onClick={handleChangeToSignUp}>Create one</button>
            </div>
      </div>
    </div>
  )
}

export default SignUp