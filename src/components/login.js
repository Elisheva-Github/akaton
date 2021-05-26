import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
// }from "react-router-dom";
import { useHistory } from "react-router-dom";
import {loginToServer} from '../services/login'

const Login = () => {

  let history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const login = async(userName,password) => {
     let res = '';
     res = await loginToServer(userName, password);
     console.log(res);
      //שולחים לשרת את שם המשתמש והסיסמא
      ///פניה לדאטא ביס של התלמיד
      if(1)//תלמיד
      history.replace("/student");
      debugger
      if(2)//מורה
      history.replace("/teacher");
      else
       alert("User not found😥😥!! please sign up.")
  }
  // function teacherClick() {
  //   history.replace("/teacherEnter");
  // }

  // function studentClick() {
  //   history.replace("/studentEnter");
  // }

  return (<div className="login">
    <img className="logo" src={"/images/logo.png"} />
    <img className="welcome" src={"/images/welcome.png"} />
    <img className="Profil" src={"/images/profil.png"} />
    <div className="group4" >
      <div >
        <input type="text" id="userName" name="userName"
         placeholder=":הכנס שם משתמש" className="name" 
         value={userName} onChange={(e) =>{ 
          console.log(e.target.value)
          setUserName(e.target.value)}}/>
      </div>
    </div>
    <div className="group3" >
      <input type="password" id="password" name="password"
       placeholder=":הכנס סיסמא" className="name" 
       value={password} onChange={(e) =>{ 
        console.log(e.target.value)
        setPassword(e.target.value)}}/>
    </div>
    debugger
    <div className="group2">
      debugger
      <button className="button" onClick={() => login(userName,password)}>  התחברות   </button>
    </div>
  </div>
  );

}

export default Login;