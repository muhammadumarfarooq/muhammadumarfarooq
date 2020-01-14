import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./_login.scss";
import ToastMsg from "../ToastMsg";
const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: ""
  });

  const [loading, setloading] = useState(false);

  const notify = msg => toast.error(msg);
  const onSubmit = e => {
    e.preventDefault();
    setloading(true);
    axios
      .post("https://mysterious-citadel-24036.herokuapp.com/send", value)
      .then(function(response) {
        setloading(false);
        notify("Try Again Later");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className='login'>
      <ToastMsg />
      <div className='man-bgImg'></div>
      <div className='login-gray'></div>

      <div className='form'>
        <form
          onSubmit={onSubmit}
          method='POST'
          action='http://127.0.0.1/email/email.php'
        >
          <h2>Login</h2>
          <p>
            If you have an account with us, please enter your email address and
            password to gain access.
          </p>

          <div className='row'>
            <div className='col-md-6 col-12 form-input-container'>
              <label>Email address*</label>
              <input
                onChange={e => setValue({ ...value, email: e.target.value })}
                type='text'
                name='email_address'
                placeholder='Email Address'
                className='question-input'
                value={value.email}
              />
            </div>
            <div className='col-md-6 col-12 form-input-container'>
              <label>Password*</label>
              <input
                onChange={e => setValue({ ...value, password: e.target.value })}
                type='password'
                name='email_address'
                placeholder='Password'
                className='question-input'
                value={value.password}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <input
                type='submit'
                className='question-input-button'
                style={{
                  backgroundColor: loading ? "rgba(255,115,83, 0.5)" : ""
                }}
                value={loading ? "Loading..." : "Login"}
              />

              <a
                className='login-help'
                href='https://www.myjobquote.co.uk/forgotten-password'
              >
                Need help logging in?
              </a>
            </div>
            <div className='col-12'>
              <p className='create-account'>
                <a href='https://www.myjobquote.co.uk/portal'>
                  Create an account
                </a>{" "}
                with MyJobQuote if you don't have one.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
