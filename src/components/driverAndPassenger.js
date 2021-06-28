
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

    const { onHide, show, isDriver } = { ...props }

    let history = useHistory();
    const dispatch = useDispatch()
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
    const [userType, setuserType] = useState(isDriver? 'driver': 'passanger');
    const [levelNum, setLevelNum] = useState(1);



    const signup = async () => {
        try {

            const res = await signupToServer(date,hour,departure, destination,email, phoneNamber,userType);
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

    const handlenumPassengersChange = (e) => {
        setnumPassengers(e.target.value)
    }
    const handlePhoneNamberChange = (e) => {
        setPhoneNamber(e.target.value)
    }

    const handleDestinationChange = (e) => {
        setdestination(e.target.value)
    }

    const handleDepartureChange = (e) => {
        setdeparture(e.target.value)
    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleHourChange = (e) => {
        setHour(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePhoneAlertsChange = (e) => {
        setphoneAlerts(e.target.value)
    }
    const handleEmailAlertsChange = (e) => {
        setemailAlerts(e.target.value)
    }
    
    const saveAllData = (e) => {




    }

    /*const changeDialogContenet= (e) => {
        setLevelNum(e.target.id);
        if(levelNum==1){
            return(
                <div>
                    <div>
                        <label>מאיפה יוצאים?</label>
                        <input value={departure} type="text" onChange={handleDepartureChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>לאן נוסעים?</label>
                        <input value={destination} type="text" onChange={handleDestinationChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>כמות הנוסעים</label>
                        <input value={numPassengers} type="text" onChange={handlenumPassengersChange}/>
                    </div>
                    <br/>
                    <div>
                    <label>תאריך</label>
                        <input  type="date" value={date} onChange={handleDateChange}/>
                    </div> 
                    <br/>
                    <div>
                        <label>שעה</label>
                        <input  type="time" value={hour} onChange={handleHourChange}/>
                    </div> 

                </div>
            )
        }
        else if(levelNum==2){
        return(
            <div>
                <div>
                    <label>מייל</label>
                    <input type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
                </div>
                <br/>
                <div>
                    <label>טלפון</label>
                    <input id="phone" name="phone" value={phoneNamber} onChange={handlePhoneNamberChange}/>
                </div>
                <br/>
                <div>
                    <label>גבר</label><input  type="radio" name="gender1" value="1" checked onC={handlenumPassengersChange}/>
                    <label>אישה</label><input  type="radio" name="gender1" value="2" onChange={handlenumPassengersChange}/>

                </div>
                <br/>
                <div>
                    <label>בחינם</label><input  type="radio" name="payment1" value="1" checked onChange={handlenumPassengersChange}/>
                    <label>בתשלום</label><input  type="radio" name="payment2" value="2" onChange={handlenumPassengersChange}/>

                </div>
                <br/>
                <div>
                    <label>רוצה לנסוע?</label><input  type="radio" name="userType1" value="1" checked onChange={handlenumPassengersChange}/>
                    <label>רוצה לנהוג?</label><input  type="radio" name="userType1" value="2" onChange={handlenumPassengersChange}/>

                </div>
           </div>
        )}
        else if(levelNum==3){
            return(
                <div>
                    <div>
                        <h2>לאן לשלוח לך עידכון על הנסיעה?</h2>
                    </div>
                    <br/>
                    <div>
                        <label>לטלפון</label>
                        <input type="checkbox" name="phoneAlert" checked onChange={handlePhoneAlertsChange}/>
                    </div>
                    <div>
                        <label>למייל</label>
                        <input type="checkbox" name="EmailAlert"  onChange={handleEmailAlertsChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <input type="button" value="לסיום ורישום נסיעה" name="done" onClick={saveAllData}/>
                    </div>

                </div>
            )
        }
    }*/

    return (
        <Dialog open={show} onClose={closeDialog} maxWidth="xs" fullWidth={true} >
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                {
                    <div>
                        <div>
                            <label>מאיפה יוצאים?</label>
                            <input value={departure} type="text" onChange={handleDepartureChange} />
                        </div>
                        <br />
                        <div>
                            <label>לאן נוסעים?</label>
                            <input value={destination} type="text" onChange={handleDestinationChange} />
                        </div>
                        <br />
                        <div>
                            <label>כמות הנוסעים</label>
                            <input value={numPassengers} type="text" onChange={handlenumPassengersChange} />
                        </div>
                        <br />
                        <div>
                            <label>תאריך</label>
                            <input type="date" value={date} onChange={handleDateChange} />
                        </div>
                        <br />
                        <div>
                            <label>שעה</label>
                            <input type="text" value={hour} onChange={handleHourChange} />
                        </div>


                        <div>
                            <input type="button" value="לסיום ורישום נסיעה" name="done" onClick={signup} />
                        </div>
                    </div>
                }
                {/* <TextField fullWidth label="PhoneNamber"
            required error={!!errorPhone} helperText={errorPhone || ''} onChange={handlePhoneNamberChange} />
            /*                <div>
                    <label>גבר</label><input  type="radio" name="gender1" value="1" checked onC={handlenumPassengersChange}/>
                    <label>אישה</label><input  type="radio" name="gender1" value="2" onChange={handlenumPassengersChange}/>

                </div>
                                <br/>
                <div>
                    <label>בחינם</label><input  type="radio" name="payment1" value="1" checked onChange={handlenumPassengersChange}/>
                    <label>בתשלום</label><input  type="radio" name="payment2" value="2" onChange={handlenumPassengersChange}/>

                </div>
                <br/>

*/
                }
            </DialogContent>
            <DialogActions>
                {/* <Button variant="contained" color="primary" onClick={handleSave}>SAVE</Button>
        <Button variant="contained" color="secondary" onClick={handleCancle}>CANCLE</Button> */}
            </DialogActions>
        </Dialog>);
    /* <input id="1" type="button" value="1" onClick={setLevelNum}/>
               -------------
               <input id="2" type="button" value="2" onClick={(e) => {
                    setLevelNum(e.target.value)}}/>
               -------------
               <input id="3" type="button" value="3" onClick={(e) => {
                    setLevelNum(e.target.value)}}/>*/

}


export default DriverAndPassenger;
