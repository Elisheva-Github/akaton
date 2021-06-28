import React from 'react';
import Header from './header';
import homeBG from '../images/homepage.jpg';
import './homePage.css';
// import { loginToServer } from '../services/login';
const Login = (props) => {


  return (<div class="bg-img" style={{ backgroundImage: `url(${homeBG})` }} >
    <Header />
    <div >
      home page
    </div>
    {/* <img src="../images/homepage.jpg"></img> */}
    {/* <img src={logo} alt="Logo" /> */}
  </div>
  );

}


export default Login;

// export default Login;