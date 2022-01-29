import React from 'react';
import logo from './assests/CSILOGO.svg'
import './Home.css'
// import Signinform from './Signinform';

const Home = () => {
  return(
      <>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <body>
          
      
      <div className="home">

          <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <img src={logo} alt="logo" className='app-logo'  />
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white">Home</a>
      <a class="mr-5 hover:text-white">Dashboard</a>
      <a class="mr-5 hover:text-white">Logout</a>
      
    </nav>
    
  </div>
</header>

<div className="content">

   <div className="c-1" id='d-1'>
          <h1 id='h-1'>Welcome To Home Page</h1>
        <div className="c-2">
          <img src={logo} alt="logo" className='app-logo'  />
          <h1>Team CSI</h1>
        </div>
   </div>
</div>



</div>
</body>
      </>
  ); 
};

export default Home;
