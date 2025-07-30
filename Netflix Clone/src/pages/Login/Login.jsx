import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
function Login() {
  const [signState, setSignState] = useState("Sign Up")
  function handleSignIn() {
    setSignState(!signState)
  }
  function handleSignUp() {
    console.log("clicked");

    setSignState("Sign Up")
  }
  return (
    <div className='login'>
      <img className='logo' src={logo} alt="Netflix Logo" />
      <div className="login-form">
        <h1>{signState === "Sign Up" ? "Sign Up" : "Sign In"}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder='Enter Your Name' /> : <></>}

          <input type="email" placeholder='Enter Your Email' />
          <input type="password" placeholder='Enter Your Password' />
          <button>{signState === "Sign Up" ? "Sign Up" : "Sign In"}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ? <p>Already Have Account? <span onClick={handleSignIn}>Sign In</span></p> : <p>New to Netflix? <span onClick={handleSignUp}>Sign Up </span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
