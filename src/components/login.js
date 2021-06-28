import React from 'react';
import Header from './header';
 import homeBG from '../images/homepage.jpg';

import './homePage.css';
// import { loginToServer } from '../services/login';
const Login = (props) => {


  return (<div class="bg-img" style={{backgroundImage: `url(${homeBG})`}} >
    <Header />
  </div>
  );

}

export default Login;