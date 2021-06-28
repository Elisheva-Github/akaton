import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {connect, useDispatch} from "react-redux";
// import { loginToServer } from '../services/login';
import '../style/login.css';
import Header from './header';

  const ViewTravel = () => {
    
  

  return (<div className="login">
 
   <Header/>
    <div>
      <button > נוסעים   </button>
    </div>

    <div>
      <button  > נהגים   </button>
    </div>
  </div>
  );

}


export default ViewTravel;

