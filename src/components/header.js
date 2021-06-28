// import React from 'react';
// import { useHistory } from "react-router-dom";


// const header = () => {

//     const history = useHistory();

//     const viewTravel = () => {

//         history.replace("/viewTravel");

//       }
//       const newTravel = () => {
//         history.replace("/newTravel");
//       }

//       const instructions = () => {
//         history.replace("/instructions");
//       }

//     return (<div >

//         <div >
//             <button onClick={() => viewTravel()}>  צפיה בנסיעות   </button>
//         </div>

//         <div>
//             <button onClick={() => newTravel()}> נסיעה חדשה   </button>
//         </div>
//         <div>
//             <button onClick={() => instructions()}> הוראות   </button>
//         </div>
//     </div>

//     )

// }
// export default header;

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import './homePage.css';

// import { loginToServer } from '../services/login';

const Header = (props) => {
    const history = useHistory();


    const viewHome = () => {

        history.replace("/");

    }
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

            <button  onClick={() => viewHome()}>  דף הבית   </button>
            <button className="bt1" onClick={() => viewTravel()}>  צפיה בנסיעות   </button>
            <button className="bt2"  onClick={() => newTravel()}> נסיעה חדשה   </button>
            <button className="bt3" onClick={() => instructions()}> הוראות   </button>
    </div>
    );

}


export default Header;

// export default Login;