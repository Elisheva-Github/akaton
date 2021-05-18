import React  from "react";
// import TeacherEnter from '../components/teacherEnter';
// import StudentEnter from './studentEnter';




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

  return (<div>

      <div>
        <div >Enter name:
         <input/>
          </div>

          <div >Enter password:
          <input/>
         </div>
         <button onClick={teacherClick}>  Teacher login  </button>
   
         <button  onClick={studentClick}>  student login   </button> 
               
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