
import React from 'react';
import './otp.css'
const Otp = () => {
  return (<>
      <body>
          <div className="container">
              <div className="">
                  <h1 className="title">OTP Verification</h1>
                  <p>Enter the OTP sent to +91 XXXXXXXXXX</p>
              </div>
              <form action="
              ">
                  <div className="rid">
                      
                <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>
                <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>
                <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>
                <div> <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div> 
                  </div>
                  <div className="submit">
                          <input type="submit" value='Redirect to Login Page'/>

                  </div>
              </form>
          </div>
      </body>
  </>);
};

export default Otp;
