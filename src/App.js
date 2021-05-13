import Login  from './components/login'
import './App.css';

function App() {
  return (
    <div className="App">
      
          <Login/>
        
    </div>
  );
}

export default App;
// import React from "react";
// import Login  from './components/login'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

//  function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/login">
//             {/* <About /> */}
//             <Login/>
//           </Route>
//           {/* <Route path="/users">
         
//          <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route> */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;