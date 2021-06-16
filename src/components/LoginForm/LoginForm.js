import React from 'react';
import './LoginForm.css';
import { useState } from 'react';
import eye from '../Img/eye.webp';
function Login(props) {
    const [hidePassword, setHidePassword] = useState(true);
    const togglePasswordVisiblity = () => {
        setHidePassword(hidePassword ? false : true);
      };
  return (props.trigger) ? (
    <div className="login">
      <div className="login-inner">
        <h3>Sign in</h3><br />
        <form>
            <h6>Email</h6>
            <input type='email' name='email' placeholder='' ></input><br /><br />
            <div>
                <h6>Lato</h6>
                <h6 className="forgot">forgot password</h6>
            </div>
            <div className="passwordInput">
                <input type={hidePassword ? "password" : "text"} name='password' placeholder=''></input>
                <img className="eye"  onClick={togglePasswordVisiblity} src={eye} alt=''></img>
            </div>
        </form>
        <br /><br />
        <button className="loginButton" onClick={() => props.setTrigger(false)}><h4>LOGIN</h4></button>
        <br />
        <p>I don't have an account</p>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Login;
