// import React, { useState } from 'react';
// // import React, { useState ,useEffect} from 'react';
// import { useHistory } from "react-router-dom";
// import { connect, useDispatch } from "react-redux";
// import { getAllPassengersFromServer } from '../services/viewPassenger';
// import { getAllDriversFromServer } from '../services/viewDrivers';
// import { mailToServer } from '../services/mail';
// import '../style/login.css';
// import homeBG from '../images/last.png';
// import './homePage.css';
//  import { saveUser } from "../action";

// // import { loginToServer } from '../services/login';
// import '../style/login.css';
// import Header from './header';


// import DateTable from './dataTable';
// // const arr=[{date:"20/20/2021",time:9},{date:"01/01/2001",time:5}]
// const ViewTravel = (props) => {
//   const history = useHistory();
//   const dispatch=useDispatch()
//   const [arr, setArr] = useState([]);

//   // useEffect(()=> {
//   //  setArr=(getAllDrivers())
//   // },[]);



//   const getAllDrivers = async () => {
//     try {
//       debugger;
//       const res = await getAllDriversFromServer();
//       debugger;
//       console.log(res);
//       setArr(res.alldrivers);
//       debugger;
//       console.log(arr);
//     dispatch({ type: "save_user", payload:arr});



//       // history.replace({
//       //   pathname: '/dataTable',
//       //   state: {  // location state
//       //     arr: arr, 
//       //   },
//       // }); 

//     //  history.replace("/dataTable",{params:arr});
//      history.replace("/dataTable");
//       // history.replace("/dataTable",{search:arr},{state: {update: true}, });
//       // history.push('/component-two',{params:'Hello World'})


//     }
//     catch (error) {
//       alert("הרישום נכשל😒");
//     }
//   }

//   const getAllPassengers = async () => {
//     try {

//       const res = await getAllPassengersFromServer();
//       console.log(res);
//       setArr(res.allpassengers);
//       debugger;
//       console.log(arr);
//       history.replace("/dataTable");

//     }
//     catch (error) {
//       alert("הרישום נכשל😒");
//     }
//   }

//   const onHideDiv = (index) => {
//     document.getElementById("divOfEmialAndPhone").style.visibility = "visible";

//   }





//   return (<div class="bg-img" style={{ backgroundImage: `url(${homeBG})` }}>


//     <div>
//       <button onClick={() => getAllDrivers()}> נהגים   </button>
//     </div>
//     <div>
//       <button onClick={() => getAllPassengers()}>  נוסעים  </button>
//     </div>




// {/* 
//     <div>

//       <table border="1">
//         <tr>
//           <td>תאריך</td>
//           <td>שעה</td>
//           <td>יעד</td>
//           <td>מוצא</td>
//           <td>בתשלום</td>
//           <td>מין</td>
//           <td>מספר נוסעים</td>
//           <td>מייל</td>
//           <td>טלפון</td>
//           <td>התראות בטלפון</td>
//           <td>התראות במייל</td>
//           <td>נהג/נוסע</td>
//         </tr>
//         {
//           arr.map(function (item, index) {
//             return <tr key={index}>
//               <td>{item.date}</td>
//               <td>{item.time}</td>
//               <td>{item.destination}</td>
//               <td>{item.departure}</td>
//               <td>{item.payment}</td>
//               <td>{item.gender}</td>
//               <td>{item.numPassengers}</td>
//               <td>{item.email}</td>
//               <td>{item.phone}</td>
//               <td>{item.emailAlerts}</td>
//               <td>{item.phoneAlerts}</td>
//               <td>{item.userType}</td>
//               <button onClick={() => onHideDiv(index)}>צור קשר</button>
//               <div id="divOfEmialAndPhone" style={{ visibility: "hidden" }}>הכנס מייל וטלפון

//                 <input type="text" />
//                 <label for="Check2"> הכנס את המייל שלך ע"מ לשלוח לנהג</label><br />

//                 <input type="text" />
//                 <label for="Check2"> הכנס את הטלפון שלך ע"מ לשלוח לנהג</label><br />


//                 <button onClick={() => sendMailAndPhone(item)}>שליחה</button>

//               </div>
//             </tr>
//           })
//         }
//       </table>

//     </div>
//  */}



//   </div>
//   );

// }


// export default ViewTravel;


import React, { useState } from 'react';
// import React, { useState ,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getAllPassengersFromServer } from '../services/viewPassenger';
import { getAllDriversFromServer } from '../services/viewDrivers';
import  {mailToServer}  from '../services/mail';
import '../style/login.css';
import homeBG from '../images/last.png';
import './homePage.css';
// import { loginToServer } from '../services/login';
import '../style/login.css';
import Header from './header';
import {sendVoiceMail} from '../services/voicemail';


// const arr=[{date:"20/20/2021",time:9},{date:"01/01/2001",time:5}]
const ViewTravel = () => {
  const [arr, setArr] = useState([]);
      const [em, setEmail] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');

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

  const onHideDiv = (index) => {
    document.getElementById("divOfEmialAndPhone").style.visibility = "visible";

  }

  const sendMailAndPhone = async (em,phoneNamber,item) => {
    sendMail(item.email,em,phoneNamber);
    sendPhone(item.phone);
  }


  const sendMail = async (email,em,phoneNumber) => {
    try {
      const res = await mailToServer(email,em,phoneNumber)
      console.log(res);
      alert("נשלח מייל לנהג");
    }
    catch (error) {
      alert("הרישום נכשל😒");
    }
  }

  const sendPhone = async (phone) => {
    try {
     
      const res = await sendVoiceMail("0548440106","mindysa@hjk","052787783");
      console.log(res);
      alert("נשלח מייל לנהג");
    }
    catch (error) {
      alert("הרישום נכשל😒");
    }
  }

  











  return (<div class="bg-img" style={{ backgroundImage: `url(${homeBG})` }}>

<Header/>
    <div>
      <button onClick={() => getAllDrivers()}> נהגים   </button>
    </div>
    <div>
      <button onClick={() => getAllPassengers()}>  נוסעים  </button>
    </div>






    <div>

      <table border="1">
        <tr>
          <td>תאריך</td>
          <td>שעה</td>
          <td>יעד</td>
          <td>מוצא</td>
          <td>מין</td>
          <td>מספר נוסעים</td>
          <td>מייל</td>
          <td>טלפון</td>
        </tr>
        {
          arr.map(function (item, index) {
            return <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.destination}</td>
              <td>{item.departure}</td>
              <td>{item.gender}</td>
              <td>{item.numPassengers}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <button onClick={() => onHideDiv(index)}>צור קשר</button>
              <div id="divOfEmialAndPhone" style={{ visibility: "hidden" }}>הכנס מייל וטלפון

 
                <input id="11" type="text"
                     placeholder="הכנס מייל"
             value={em} onChange={(e) => {
                 console.log(e.target.value)
                 setEmail(e.target.value)
             }} />

                
            <input id="11" type="text"
                     placeholder="הכנס טלפון"
             value={phoneNumber} onChange={(e) => {
                 console.log(e.target.value)
                 setPhoneNumber(e.target.value)
             }} />
                

                <button onClick={() => sendMailAndPhone(em,phoneNumber,item)}>שליחה</button>

              </div>
            </tr>
          })
        }
      </table>

    </div>




  </div>
  );

}


export default ViewTravel;



