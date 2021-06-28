import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {connect, useDispatch} from "react-redux";
// import { loginToServer } from '../services/login';
const Login = (props) => {
const dispatch=useDispatch()
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const viewTravel = () => {
    
      history.replace("/viewTravel");  
   
  }
  const newTravel = () => {
    history.replace("/newTravel");
  }

  const instructions = () => {
    history.replace("/instructions");
  }

  return (<div >
 
    <div >
      <button  onClick={() => viewTravel()}>  צפיה בנסיעות   </button>
    </div>
     
    <div>
      <button  onClick={() => newTravel()}> נסיעה חדשה   </button>
    </div>

    <div>
      
    </div>
    <div>
      <button  onClick={() => instructions()}> הוראות   </button>
    </div>

    <div>
  </div>
  );

}


const mapStateToProps = (state) => {
  debugger
  return {
    fname: state.user?.user?.firstName,
  };
};
export default connect(mapStateToProps, {})(Login);

// export default Login;