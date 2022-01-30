import React , {useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
    const url ="https://curd-web.herokuapp.com/login"
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    
  return (<>
  
      <body>
          <div className="container-2">
              <div className="header">
                  <h1 className="title">Login</h1>
              </div>
              <form action="
              ">
                  <div className="id">
                 <h3> <label htmlFor="id">UserId</label></h3>
           <div>    <i className="far fa-user"><input type="email" autoComplete='off' id='id' placeholder='Enter userId' name='id'
                     onChange={(e)=>setId(e.target.value)}
                 /></i>  </div>  
                  </div>
                  <div className="id">
                 <h3> <label htmlFor="password">Password</label></h3>
                 <i className="fas fa-unlock"></i>
                 <div>     <input type="password" autoComplete='off' id='password'
                 name='password' onChange={(e)=>setPassword(e.target.value)}  /> </div>  
                  </div>
                  <a href="">Forgot password?</a>
                  <div className="captcha">
                  <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div>
                  </div>
                  <div className="submit1">
                  <div className="login">
                      {/* <input type="submit" value='Login' /> */}
                      <button >Login</button>
                  </div>
                  <div className="Sign Up">
                      {/* <input type="submit" value='Sign Up' /> */}
                      <button >Sign Up</button>
                  </div>
                  </div>

              </form>
          </div>
      </body>
      
  </>);
};

export default Login;