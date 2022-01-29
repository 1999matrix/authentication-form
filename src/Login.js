import React from 'react';
import './login.css'

const Login = () => {
  return (<>
      <body>
          <div className="container">
              <div className="header">
                  <h1 className="title">Login</h1>
              </div>
              <form action="
              ">
                  <div className="id">
                 <h3> <label htmlFor="user-id">UserId</label></h3>
                 <i class="far fa-user"><input type="text" autoComplete='off' id='user-id' placeholder='Enter userId'/></i>  
                  </div>
                  <div className="id">
                 <h3> <label htmlFor="pass">Password</label></h3>
                 <i class="fas fa-unlock"></i>
                 <input type="password" autoComplete='off' id='pass'  />
                  </div>
                  <a href="">Forgot password?</a>
                  <div className="captcha">
                  <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div>
                  </div>
                  <div className="submit">
                  <div className="login">
                      <input type="submit" value='Login' />
                  </div>
                  <div className="Sign Up">
                      <input type="submit" value='Sign Up' />
                  </div>
                  </div>

              </form>
          </div>
      </body>
  </>);
};

export default Login;