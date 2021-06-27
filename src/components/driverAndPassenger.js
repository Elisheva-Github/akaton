
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { saveUser } from "../action";
import { signupToServer } from '../services/signup';


const DriverAndPassenger = (props) => {
    let history = useHistory();
    const dispatch=useDispatch()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNamber, setPhoneNamber] = useState('');
    const [person, setPeson] = useState('');
    const [sPoint, setSPoint] = useState('');
    const [fPoint, setFPoint] = useState('');

    const signup = async ( firstName, lastName, date, email, phoneNamber,person,sPoint,fPoint) => {
        try {

            const res = await signupToServer( firstName, lastName, date, email, phoneNamber,person,sPoint,fPoint);
            console.log(res);
            alert("ברישום בוצע בהצלחה!ו!!!!😊😊");
            history.replace("/viewTravel");
        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }


 return (<div >


 {/* firstname */}
 
     <div >
         <input type="text" id="firstName" name="firstName"
             placeholder=":הכנס שם פרטי"
             value={firstName} onChange={(e) => {
                 console.log(e.target.value)
                 setFirstName(e.target.value)
             }} />
   
 </div>

 {/* lastname */}

     <div >
         <input type="text" id="lastname" name="lastname"
             placeholder=":הכנס שם משפחה" 
             value={lastName} onChange={(e) => {
                 console.log(e.target.value)
                 setLastName(e.target.value)
             }} />
     </div>
 

 

 {/* email */}
 
     <div >
         <input type="text" id="email" name="email"
             placeholder=": הכנס דואר אלקטרוני" 
             value={email} onChange={(e) => {
                 console.log(e.target.value)
                 setEmail(e.target.value)
             }} />
     </div>


 {/* id */}
 <input  type="date"
            value={date} onChange={(e) => {
                console.log(e.target.value)
                setDate(e.target.value)
            }}
        />


 <div>
     <select onChange={e => { setPhoneNamber(e.target.value) }} >
         < option >מייל</option>
         < option>טלפון</option>
     </select>
 </div>


 <div>
     <select onChange={e => { setPeson(e.target.value) }} >
         < option >איש</option>
         < option>אישה</option>
     </select>
 </div>

 
      <div >
         <input type="text" id="lastname" name="lastname"
             placeholder="הכנס מוצא" 
             value={sPoint} onChange={(e) => {
                 console.log(e.target.value)
                 setSPoint(e.target.value)
             }} />
     </div> 



      <div >
         <input type="text" id="lastname" name="lastname"
             placeholder="הכנס יעד" 
             value={fPoint} onChange={(e) => {
                 console.log(e.target.value)
                 setFPoint(e.target.value)
             }} />
     </div> 

 <div>

     <button className="signup" onClick={() => {
         signup( firstName, lastName, date, email, phoneNamber,person,sPoint,fPoint)
         dispatch({ type: "save_user", payload:{ firstName, lastName, date, email, phoneNamber,person,sPoint,fPoint }})
     }
     }> רישום   </button>
     
 </div>
</div>
);

}


export default DriverAndPassenger;