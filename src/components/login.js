import React  from "react";
import TeacherEnter from '../components/teacherEnter';
import StudentEnter from './studentEnter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
import { useHistory } from "react-router-dom";

 const Login  =() => {
  

     let history = useHistory();

    // function teacherClick() {
    //    history.replace("/teacherEnter");
    //        }
    // function studentClick() {
    //     history.replace("/studentEnter");
    //          }
    function teacherClick() {
         history.replace("/teacherEnter");
      }
      
      function studentClick() {
        return <h2>About</h2>;
      }
    

  return (<div>
      <div>
     
        <div >Enter name:
         <input/>
          </div>
          <div >Enter password:
          <input/>
         </div>
             <button type="button" onClick={teacherClick}>
            Teacher login
            </button>
    
             <button type="button" onClick={studentClick}>
            student login
            </button>     
     </div>
    {/* <Router>
    <ul>
          <li>
            <Link to="/teacherEnter">Teacher</Link>
          </li>
          <li>
            <Link to="/studentEnter">Student</Link>
          </li>
          
        </ul>

      <div>
        <Switch>
          <Route path="/teacherEnter">
            <TeacherEnter />
          </Route>
          <Route path="/studentEnter">
            <StudentEnter />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>
        );

    }
 
export default Login;