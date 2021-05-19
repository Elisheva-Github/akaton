import React  from "react";
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


 const Login  =() => {
   
     let history = useHistory();

    function teacherClick() {
       history.replace("/teacherEnter");
       }

    function studentClick() {
        history.replace("/studentEnter");
             }

  return (<div className=" login ">
    {/* <image className="logo" src={"Group 7.png"}> </image>
    <image className="welcome" src={"!םיאבה םיכורב.png"}> </image> */}
     <image className="Profil" src={"components/static/פרופיל 2.png"}> </image> 
    <div className= "Rectangle"></div>

      {/* <div className="group4" >    
        <div className="Rectangle2" >Enter name:</div>
          <div >Enter name:
              <input className="name" />
          </div>
        </div> */}


          <div className="group4" >  
          <div >
              <input  className="   name "  content="hrmkea"/>
          </div>

        </div>


        <div  className="group3" >
        
        <input className="name"/>
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