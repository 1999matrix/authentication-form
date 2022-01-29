import React from 'react';
import './sign.css';
import { useState } from 'react';
import Axios from 'axios'

const Signinform = () => {
    const url ="https://curd-web.herokuapp.com/register"
    // const url ="http://localhost:3001"
    // const url ="/register"
    const[data , setData] = useState({
        name:"",
        email:"",
        phone: "",
        rollnum: "",
        branch:"",
        year:"",
        gen: '',
        address: "",
        password: "",
        confirmpassword: ""
    });
    // let name ,value;
    // const handleInput = (e) => {
    //     console.log(e);
    //     name = e.target.name;
    //     value= e.target.value;
    //     setData({...data , [name]:value})
    // }
    function handle(e){
        const newdata ={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata);
        console.log(newdata);
    }
         function submit(e){
            e.preventDefault();
            Axios.post(url , {
                name: data.name,
                email: data.email,
                rollnum:parseInt (data.rollnum),
                password: data.password,
                phone:parseInt(data.phone),
                address: data.address,
                year: parseInt(data.year),
                branch: data.branch,
                gen: data.gen,
                confirmpassword:data.confirmpassword
                // gen: data.gen
            }) .then(res=> {
                console.log(res.data)
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
                           placeholder='Name' id='name' value={data.name} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     
                         <input type="number" autoComplete='off' id='rollnum' placeholder='Roll No.' name='rollnum' value={data.rollnum} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     

                         {/* <select name="branch" id='branch' className=""  value={data.branch} onChange={(e)=> handle(e)} required >
                             <option value="">Branch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                             <option value="CSE">CSE</option>
                             <option value="CS-AIML">CS-AIML</option>
                             <option value="CS-DS">CS-DS</option>
                             <option value="IT">IT</option>
                             <option value="ECE">ECE</option>
                             <option value="MECHANICAL">MECHANICAL</option>
                         </select> */}
                         <input type="text" autoComplete='off'
                           name='branch'
                           placeholder='Branch' id='branch' value={data.branch} onChange={(e)=> handle(e)} required/>

                     </div>

                     <div className="form">
                  
                         <input type="email" autoComplete='off' id='email' placeholder='Email' name='email' value={data.email} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     
                         <input type='text' autoComplete='off' id='address' placeholder='Address' name='address'  value={data.address} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                   
                         <input type="password" autoComplete='off' id='password' placeholder='Password' name='password' value={data.password} onChange={(e)=> handle(e)} required/>
                     </div>
                     </div>
                     
                     
                      <div className="f-2">
                      <div className="form">
                   
                         <input type="password" autoComplete='off'  placeholder='Confirm Password' name='confirmpassword' id='confirmpassword' value={data.confirmpassword} onChange={(e)=> handle(e)} required/>
                     </div>
                      <div className="form">
                     {/* <select name="year" id="year"  value={data.year} onChange={(e)=> handle(e)}required>
                     
                   <option value="">Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                             <option value="Ist">Ist</option>
                             <option value="IInd">IInd</option>
                             <option value="IIIrd">IIIrd</option>
                             <option value="IVth">IVth</option>
                            
                       </select>  */}
                       <input type="number" autoComplete='off' id='year' placeholder='year' name='year' value={data.year} onChange={(e)=> handle(e)} required/>


                     </div>
                        

                     <div className="form">
                     <label htmlFor="gender">Gender&nbsp;</label>
                        
                        {/* <label htmlFor="male" >Male</label>
                        <input type="radio" id='male' name='gen' value='male' onChange={(e)=> handle(e)} required/>

                        <label htmlFor="female">Female</label>   
                        <input type="radio" id='female' name='gen' value='female' onChange={(e)=> handle(e)} required/> */}

                        <input type="text" autoComplete='off' id='gen' placeholder='gender' name='gen' value={data.gen} onChange={(e)=> handle(e)} required/>
                       

                        
                     </div>
                     <div className="form">
                     
                     <input type='number' autoComplete='off' id='phone' placeholder='Contact No.' name='phone' value={data.phone} onChange={(e)=> handle(e)} required/>
                     </div>

                     <div className="form">
                     
                     {/* <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div> */}
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
