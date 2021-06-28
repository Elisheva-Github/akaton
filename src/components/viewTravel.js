import React, { useState } from 'react';
// import React, { useState ,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getAllPassengersFromServer } from '../services/viewPassenger';
import { getAllDriversFromServer } from '../services/viewDrivers';
import '../style/login.css';
import './viewTravel.css';

import Header from './header';


import homeBG from '../images/last.png';

import './homePage.css';
// import { loginToServer } from '../services/login';
import '../style/login.css';


// const arr=[{date:"20/20/2021",time:9},{date:"01/01/2001",time:5}]
const ViewTravel = () => {
  const [arr, setArr] = useState([]);

  // useEffect(()=> {
  //  setArr=(getAllDrivers())
  // },[]);



  const getAllDrivers = async () => {
    try {
      debugger;
      const res = await getAllDriversFromServer();
      debugger;
      console.log(res);
      setArr(res.alldrivers);
      debugger;
      console.log(arr);


    }
    catch (error) {
      alert("הרישום נכשל😒");
    }
  }

  const getAllPassengers = async () => {
    try {

      const res = await getAllPassengersFromServer();
      console.log(res);
      setArr(res.allpassengers);
      debugger;
      console.log(arr);

    }
    catch (error) {
      alert("הרישום נכשל😒");
    }
  }



  return (<div class="bg-img" style={{ backgroundImage: `url(${homeBG})` }}>

<Header/>
    <div>
      <button className="new-btn btn1" onClick={() => getAllDrivers()}> נהגים   </button>
    </div>
    <div>
      <button className="new-btn btn2" onClick={() => getAllPassengers()}>  נוסעים  </button>
    </div>


  </div>
  );

}


export default ViewTravel;


