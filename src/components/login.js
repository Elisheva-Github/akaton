import React from "react";
// import TeacherEnter from '../components/teacherEnter';
// import StudentEnter from './studentEnter';

import '../login.css';
// import 'components/static/Group 7.png'



import {
  BrowserRouter as Router,
  Switch,
  // Route


} from "react-router-dom";
import { useHistory } from "react-router-dom";


const Login = () => {

  let history = useHistory();

  function teacherClick() {
    history.replace("/teacherEnter");
  }

  function studentClick() {
    history.replace("/studentEnter");
  }

  return (<div className=" login ">
    <img className="logo" src={"/images/logo.png"} />
    <img className="welcome" src={"/images/welcome.png"} />
    <img className="Profil" src={"/images/profil.png"} />
    <div className="Rectangle"></div>

    {/* <div className="group4" >    
        <div className="Rectangle2" >Enter name:</div>
          <div >Enter name:
              <input className="name" />
          </div>
        </div> */}


    <div className="group4" >
      <div >
        <input type="text" id="userName" name="userName" placeholder=":הכנס שם משתמש" className="name" />
      </div>

    </div>


    <div className="group3" >

      <input type="password" id="password" name="password" placeholder=":הכנס סיסמא" className="name" />
    </div>








    {/* <div  className="group3" >
          <div className="Rectangle2" >Enter password: </div>
             <div > 
              <input className="password"/>
             </div>
      </div> */}
    <div className="group2">

      {/* <button className="button" onClick={teacherClick}>  Teacher login  </button> */}
      <button className="button" onClick={studentClick}>  התחברות   </button>

    </div>



    <Router>
      <div>
        <Switch>
          {/* <Route path="/teacherEnter">
            <TeacherEnter />
          </Route>
          <Route path="/studentEnter">
            <StudentEnter />
          </Route> */}
        </Switch>
      </div>
    </Router>
  </div>
  );

}

export default Login;