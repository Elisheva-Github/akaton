import React, {useState} from 'react';
// import React, { useState ,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getAllPassengersFromServer } from '../services/viewPassenger';
import { getAllDriversFromServer } from '../services/viewDrivers';
import '../style/login.css';




import homeBG from '../images/last.png';

import './homePage.css';
// import { loginToServer } from '../services/login';
import '../style/login.css';
import Header from './header';


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



  return (<div class="bg-img" style={{backgroundImage: `url(${homeBG})`}}>


    <div>
      <button onClick={()=>getAllDrivers()}> נהגים   </button>
    </div>
    <div>
      <button onClick={()=>getAllPassengers()}>  נוסעים  </button>
    </div>






     <div>

      <table border="1">
     <tr>
       <td>תאריך</td>
       <td>שעה</td>
       <td>יעד</td>
       <td>מוצא</td>
       <td>בתשלום</td>
       <td>מין</td>
       <td>מספר נוסעים</td>
       <td>מייל</td>
       <td>טלפון</td>
       <td>התראות בטפל</td>
       <td>התראות במייל</td>
       <td>נהג/נוסע</td>
     </tr>
        {
          arr.map(function(item, index){
            return <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.destination}</td>
              <td>{item.departure}</td>
              <td>{item.payment}</td>
              <td>{item.gender}</td>
              <td>{item.numPassengers}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.emailAlerts}</td>
              <td>{item.phoneAlerts}</td>
              <td>{item.userType}</td>
              {/* <button onClick={()=>onHideDiv()}>צור קשר</button> */}
            </tr>
          })
        }
      </table> 
    </div>




  </div>
  );

}


export default ViewTravel;


