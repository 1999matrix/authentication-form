
import React from 'react';
import './otp.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
const Otp = () => {
    const navi = useNavigate();
    const url1 ="https://curd-web.herokuapp.com/register";
      const [data1, setData1] = useState({
        otp : ""
      });
      function handleChange(e){
        const newData={...data1};
        newData[e.target.id]=e.target.value;
        setData1(newData)
        console.log(newData);
    }

    function login(e){
        e.preventDefault();
        Axios( {
            
           method:'get',
           url: "https://curd-web.herokuapp.com/register"
        })
        .then(res => {
            if(res.data.otp_val = data1.otp){
                console.log(res.data)
                alert('Successful Registration')
                res.data.isverified = true;
                navi('/Login');
            }
            else{
                        alert('otp not verified');
            }
        //   console.log(res.data)
        //   navi('/Home');

         
        }).catch(error => {
            console.log(error)
          })
        
    }

  return (<>
      <body> 
          <div className="container-5">
              <div className="">
                  <h1 className="title">OTP Verification</h1>
                  <p>Enter the OTP has been sent to your registered email</p>
              </div>
              <form action="
              ">
                  <div className="rid">
                      
                <div>  <input type="number"  name="otp" maxlength="4"  pattern="\d{4}"  id='otp'  onChange={(e)=>handleChange(e)} value={data1.otp} required/></div>
                             <div className="resend">
                                 
                             </div>
               
                   {/* <a>Resend OTP</a> */}

                  
               
                  </div>
                  <div className="submit">
                          <input type="submit" onClick={(e)=> login(e)} value='Redirect to Login Page'/>

                  </div>
              </form>
          </div> 
      </body>
  </>);
};

export default Otp;
