// import Login  from './components/login'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//          <Router>
//         <Switch>
//         <Route path="/">
//              <Login/>
//         </Route>
//      </Switch>
//      </Router>
//    </div>     
//   )
// }

//export default App;
import React from "react";
import Login  from './components/login';
import TeacherEnter from './components/teacherEnter';
import StudentEnter from './components/studentEnter';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

 function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/teacherEnter">
            <TeacherEnter />
          </Route>
          <Route path="/studentEnter">
            <StudentEnter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;