
import React from 'react';
import './recovery.css'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Axios from 'axios';
const Passrecovery = () =>
 {
     const navigate = useNavigate();
     const url="https://curd-web.herokuapp.com/password-forgot"
    const [data, setData] = useState({
        email : ""
    });
    function handleChange(e){
        const newData={...data};
        newData[e.target.id]=e.target.value;
        setData(newData)
        console.log(newData);
    }

    function redirect(e){
        e.preventDefault();
        Axios.post(url , {
            email:data.email
        }).then(res=>{
            alert('Password reset link has been sent to your email......')
            console.log(res.data)
            navigate('/Login');
        }).catch(error=>{
            console.log(error);
            alert('Invalid User Id');
        })
    }
   
  return (
      <>
      <body> 
          <div className="container-4">
              <div className="">
                  <h1 className="title">Forgot Password</h1>
                  <p>Your password has been sent to your registered Email </p>
              </div>
              <form action="
              ">
                  <div className="rid1">
                      <h3><label htmlFor="email">Enter UserId</label></h3>
                      <div className='icon'>
                      <i className="far fa-user">  <input type="email" placeholder='Confirm Your UserId' value={data.email} id='email' onChange={(e)=>handleChange(e)}/></i>
                  </div>
                  </div>
                  <div className="g">
                  <div className="submit1">
                          {/* <input type="submit" value='Redirect to Login Page'/> */}
                     <button onClick={(e)=>redirect(e)}>Redirect to Login Page</button>
                  </div>
                  </div>
              </form>
          </div> 
      </body>
      
  </>);
};

export default Passrecovery;