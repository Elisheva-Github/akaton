import React from 'react';
import Header from './header';
import logo from '../images/homepage.jpg';
import './homePage.css';
// import { loginToServer } from '../services/login';
const Login = (props) => {


  return (<div   >
    <Header />
    <div style={{
    height: 100,
    backgroundImage: `url(${logo})`
  }}>
          home page
  </div>
    {/* <img src="../images/homepage.jpg"></img> */}
    {/* <img src={logo} alt="Logo" /> */}
  </div>
  );

}


export default Login;

// export default Login;