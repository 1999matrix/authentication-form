import React from 'react';
import './sign.css';
import { useState } from 'react';
import Axios from 'axios'

const Signinform = () => {
    const url ="https://curd-web.herokuapp.com/register"
    const[user , setUser] = useState({
        name:"",
        email:"",
        phone: "",
        rollnum: "",
        branch:"",
        year:"",
        // gen: '',
        address: "",
        password: "",
        confirmpassword: ""
    });
    // let name ,value;
    // const handleInput = (e) => {
    //     console.log(e);
    //     name = e.target.name;
    //     value= e.target.value;
    //     setUser({...user , [name]:value})
    // }
    function handle(e){
        const newdata ={...user}
        newdata[e.target.id]=e.target.value
        setUser(newdata);
        console.log(newdata);
    }
         function submit(e){
            e.preventDefault();
            Axios.post(url , {
                name: user.name,
                email: user.email,
                rollnum: user.rollnum,
                password: user.password,
                phone: user.phone,
                address: user.address,
                year: user.year,
                branch: user.branch,
                confirmpassword:user.confirmpassword
                // gen: user.gen
            }) .then(res=> {
                console.log(res.user)
            })
         }
  return(
      <>
          <body>
          <div className="body">
              <div className="container">
              <div>
                  <h1>Sign Up</h1>
              </div>
                 <form action="" onSubmit={(e)=> submit(e)}>
                 <div className="c-1">
                 <div className="f-1">

                     <div className="form">
                     
                         <input type="text" autoComplete='off'
                           name='name'
                           placeholder='Name' id='name' value={user.name}onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     
                         <input type="text" autoComplete='off' id='rollnum' placeholder='Roll No.' name='rollnum' value={user.rollnum} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     

                         <select name="branch" id='branch' className=""  value={user.branch} onChange={(e)=> handle(e)} required >
                             <option value="">Branch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                             <option value="CSE">CSE</option>
                             <option value="CS-AIML">CS-AIML</option>
                             <option value="CS-DS">CS-DS</option>
                             <option value="IT">IT</option>
                             <option value="ECE">ECE</option>
                             <option value="MECHANICAL">MECHANICAL</option>
                         </select>

                     </div>

                     <div className="form">
                  
                         <input type="email" autoComplete='off' id='email' placeholder='Email' name='email' value={user.email}onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     
                         <input type='text' autoComplete='off' id='address' placeholder='Address' name='address'  value={user.address} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                   
                         <input type="password" autoComplete='off' id='password' placeholder='Password' name='password' value={user.password} onChange={(e)=> handle(e)} required/>
                     </div>
                     </div>
                     
                     
                      <div className="f-2">
                      <div className="form">
                   
                         <input type="password" autoComplete='off'  placeholder='Confirm Password' name=' confirmpassword' id='confirmpassword' value={user.password} onChange={(e)=> handle(e)} required/>
                     </div>
                      <div className="form">
                     <select name="year" id="year"  value={user.year} onChange={(e)=> handle(e)}required>
                     
                   <option value="">Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                             <option value="Ist">Ist</option>
                             <option value="IInd">IInd</option>
                             <option value="IIIrd">IIIrd</option>
                             <option value="IVth">IVth</option>
                            
                       </select> 
                     </div>
                        

                     <div className="form">
                     <label htmlFor="gender">Gender&nbsp;</label>
                        
                        <label htmlFor="male" >Male</label>
                        <input type="radio" id='male' name='gen' value='male' onChange={(e)=> handle(e)} required/>

                        <label htmlFor="female">Female</label>   
                        <input type="radio" id='female' name='gen' value='female'onChange={(e)=> handle(e)} required/>
                       

                        
                     </div>
                     <div className="form">
                     
                     <input type='tel' autoComplete='off' id='phone' placeholder='Contact No.' name='phone' value={user.phone} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     
                     <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div>
                     </div>
                     </div>  
                     </div>

                     <div className="submit">
                         {/* <input type="submit" value='Sign Up' name='submit'/> */}
                         <button>Sign Up</button>
                     </div>
                 </form>

              </div>
          </div>
          </body> 
      </>
  ); 
};

export default Signinform;
