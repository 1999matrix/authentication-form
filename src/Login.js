import React , { useState} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './login.css'
import Axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const url ="https://curd-web.herokuapp.com/login"
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [data, setData] = useState({
        email:"",
        password:"" 
    });
    function handleChange(e){
        const newData={...data};
        newData[e.target.id]=e.target.value;
        setData(newData)
        console.log(newData);
    }
    function login(e){
        e.preventDefault();
        Axios.post(url,{
          email:data.email,
          password:data.password
        })
        .then(res => {
          console.log(res.data)
          navigate('/Home');
       
        })
        .catch(error => {
            console.log(error)
            alert('Not a registered user please Sign Up')
          })
        // .catch(err)(
        //     alert("Invalid Credentials!!")
        // )
    }
    
  return (<>
  
      <body>
          <div className="container-2">
              <div className="header">
                  <h1 className="title">Login</h1>
              </div>
              <form action="
              ">
                  <div className="id">
                 <h3> <label htmlFor="email">UserId</label></h3>
           <div>    <i className="far fa-user"><input type="email" value={data.email} autoComplete='off' id='email' placeholder='Enter userId' name='email'
                     onChange={(e)=>handleChange(e)}
                 /></i>  </div>  

                  </div>



                  <div className="id">
                 <h3> <label htmlFor="password">Password</label></h3>
                 <i className="fas fa-unlock"></i>
                 <div>     <input type="password" autoComplete='off' id='password' value={data.password}
                 name='password' onChange={(e)=>handleChange(e)}  /> </div>  
                  </div>




                  {/* <a href="">Forgot password?</a> */}
              <div className="reset">
                   <a><Link to={'/Passrecovery'}>Forgot password?</Link></a>

              </div>







                  <div className="captcha">
                  <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div>
                  </div>




                  <div className="submit1">
                  <div className="login">

                      {/* <input type="submit" value='Login' /> */}
                      <button onClick={(e)=> login(e)} type="submit" >Login</button>
                  </div>




                  <div className="Sign Up" >
                      {/* <input type="submit" value='Sign Up' /> */}
                   <Link to={'/Sign'}><button  type = "submit">Sign Up</button></Link> 
                  </div>
                  </div>

              </form>
          </div>
      </body>
      
  </>);
};

export default Login;