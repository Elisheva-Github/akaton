import React, { useState } from 'react';
import homeBG from '../images/last.png';

import './homePage.css';
// import { loginToServer } from '../services/login';
import '../style/login.css';
import Header from './header';

  const ViewTravel = () => {
    
  

  return (<div class="bg-img" style={{backgroundImage: `url(${homeBG})`}}>
 
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

