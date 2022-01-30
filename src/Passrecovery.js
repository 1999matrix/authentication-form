
import React from 'react';
import './recovery.css'
const Passrecovery = () => {
  return (<>
  
      <body> 
          <div className="container-4">
              <div className="">
                  <h1 className="title">Forgot Password</h1>
                  <p>Your password has been sent to your registered mobile no +91 XXXXXXXXXX</p>
              </div>
              <form action="
              ">
                  <div className="rid1">
                      <h3><label htmlFor="userid">Enter UserId</label></h3>
                      <div className='icon'>
                      <i className="far fa-user">  <input type="text" placeholder='Confirm Your UserId'/></i>
                  </div>
                  </div>
                  <div className="g">
                  <div className="submit">
                          <input type="submit" value='Redirect to Login Page'/>
                  </div>
                  </div>
              </form>
          </div> 
      </body>
      
  </>);
};

export default Passrecovery;