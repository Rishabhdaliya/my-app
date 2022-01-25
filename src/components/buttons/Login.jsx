import React from "react";
import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";

function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    
    setLoading(true);
    try {
      
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      
    } catch {
      
      alert("Incorrect id or password!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <div id="main">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span> {currentUser && currentUser.email ? 'Account' : 'Login' } 
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login/Register
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <div>Currently logged in as: {currentUser?.email} </div>
                <div className="mb-3"></div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    ref={emailRef}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    ref={passwordRef}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary w-100 mt-5"
                  hidden={loading || currentUser}
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary w-100 mt-5"
                  disabled={loading || currentUser}
                  onClick={() => handleSignup()}
                >
                  Register
                </button>
            </div>
            <button
              type="button"
              className="btn btn-outline-primary w-100 mt-5"
              //   disabled={loading || currentUser}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
