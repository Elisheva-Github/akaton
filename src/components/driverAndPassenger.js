
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { saveUser } from "../action";
import { signupToServer } from '../services/signup';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const DriverAndPassenger = (props) => {

    const {onHide, show } = { ...props }

    let history = useHistory();
    const dispatch=useDispatch()
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [departure, setdeparture] = useState('');
    const [destination, setdestination] = useState('');
    const [payment, setpayment] = useState('');
    const [gender, setgender] = useState('');
    const [numPassengers, setnumPassengers] = useState('');
    const [email, setEmail] = useState('');

    const [phoneNamber, setPhoneNamber] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const [emailAlerts, setemailAlerts] = useState('');
    const [phoneAlerts, setphoneAlerts] = useState('');
    const [userType, setuserType] = useState('');
   
    
    const signup = async (  date,hour,departure, destination,payment,gender,numPassengers,email, phoneNamber,emailAlerts,userType) => {
        try {

            const res = await signupToServer(date,hour,departure, destination,payment,gender,numPassengers,email, phoneNamber,emailAlerts,userType);
            console.log(res);
            alert("ברישום בוצע בהצלחה!ו!!!!😊😊");
            history.replace("/viewTravel");
        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }

    const closeDialog = () => {
        setPhoneNamber(null);
        setErrorPhone('');
       
        onHide();
    }

    const handlePhoneNamberChange = (e) => {
        setPhoneNamber(e.target.value)
    }


 return (
    <Dialog open={show} onClose={closeDialog} maxWidth="xs" fullWidth={true} >
    <DialogTitle> נסיעה חדשה</DialogTitle>
    <DialogContent>
        <TextField fullWidth label="PhoneNamber"
            required error={!!errorPhone} helperText={errorPhone || ''} onChange={handlePhoneNamberChange} />
  
    </DialogContent>
    <DialogActions>
        {/* <Button variant="contained" color="primary" onClick={handleSave}>SAVE</Button>
        <Button variant="contained" color="secondary" onClick={handleCancle}>CANCLE</Button> */}
    </DialogActions>
</Dialog>
//  <div >

     
//  <input  type="date"
//             value={date} onChange={(e) => {
//                 console.log(e.target.value)
//                 setDate(e.target.value)
//             }}
//         />
// <div>


// <input type="time"
//             value={hour} onChange={(e) => {
//                 console.log(e.target.value)
//                 setHour(e.target.value)
//             }} />
//                 <label for="City1">הכנס שעה</label>

//                 </div>

//  {/* payment */}
 

   
// <div>
//    <input name="City" id="City1" type="radio" checked="checked" 
//     value={payment} onChange={(e) => {
//         console.log(e.target.value)
//         setpayment(e.target.value)
//     }} /><label for="City1">תשלום</label><br />

//     <input name="City" id="City2" type="radio" checked="checked" 
//     value={payment} onChange={(e) => {
//         console.log(e.target.value)
//         setpayment(e.target.value)
//     }} /><label for="City1">ללא תשלום</label><br />
// </div>



// <div >
//          <input type="text" id="email" name="email"
//              placeholder=": הכנס מספר טלפון" 
//              value={phoneNamber} onChange={(e) => {
//                  console.log(e.target.value)
//                  setPhoneNamber(e.target.value)
//              }} />
//      </div>
 

//  {/* email */}
 
//      <div >
//          <input type="text" id="email" name="email"
//              placeholder=": הכנס דואר אלקטרוני" 
//              value={email} onChange={(e) => {
//                  console.log(e.target.value)
//                  setEmail(e.target.value)
//              }} />
//      </div>


 


 
//  <div>
//  <input name="City" id="City1" type="radio" checked="checked" 
//     value={gender} onChange={(e) => {
//         console.log(e.target.value)
//         setgender(e.target.value)
//     }} /><label for="City1">איש</label><br />

// <input name="City" id="City1" type="radio" checked="checked" 
//     value={gender} onChange={(e) => {
//         console.log(e.target.value)
//         setgender(e.target.value)
//     }} /><label for="City1">אישה</label><br />
//  </div>

 
//       <div >
//          <input type="text" id="lastname" name="lastname"
//              placeholder="הכנס מוצא" 
//              value={departure} onChange={(e) => {
//                  console.log(e.target.value)
//                  setdeparture(e.target.value)
//              }} />
//      </div> 



//       <div >
//          <input type="text" id="lastname" name="lastname"
//              placeholder="הכנס יעד" 
//              value={destination} onChange={(e) => {
//                  console.log(e.target.value)
//                  setdestination(e.target.value)
//              }} />
//      </div> 

// <div>
//      <input  type="number" min="0" max="24"
//             value={numPassengers}
//             onChange={(e) => {
//                 console.log(e.target.value)
//                 setnumPassengers(e.target.value)
//             }} />
//              <label for="City1">כמות נוסעים</label>
//              </div>

// <input name="City" id="City1" type="radio" checked="checked" 
//     value={userType} onChange={(e) => {
//         console.log(e.target.value)
//         setuserType(e.target.value)
//     }} /><label for="City1">נהג</label><br />

//     <input name="City" id="City1" type="radio" checked="checked" 
//     value={userType} onChange={(e) => {
//         console.log(e.target.value)
//         setuserType(e.target.value)
//     }} /><label for="City1">נוסע</label><br />


// <div>
// <label for="Check2">איך רצונך לקבל את העידכון על הנסיעה המתאימה</label>
// <br />
// <input id="Check1" type="checkbox"
// value={phoneAlerts} onChange={(e) => {
//         console.log(e.target.value)
//         setphoneAlerts(e.target.value)
// }} /><label for="Check1">בטלפון</label><br />


//         <input id="Check2" type="checkbox" checked="checked"
//         value={emailAlerts} onChange={(e) => {
//             console.log(e.target.value)
//             setemailAlerts(e.target.value)
//          }} /><label for="Check2">במייל</label><br />
//      </div>   
//  <div>

//      <button className="signup" onClick={() => {
//          signup( date,hour,departure,destination,payment,gender,numPassengers,email, phoneNamber,emailAlerts,userType)
//          dispatch({ type: "save_user", payload:{date,hour,departure,destination,payment,gender,numPassengers,email, phoneNamber,emailAlerts,userType }})
//      }
//      }> רישום   </button>
     
//  </div>

//  </div>

);

}


export default DriverAndPassenger;