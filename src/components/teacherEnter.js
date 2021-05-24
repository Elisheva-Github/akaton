import React from 'react';

import { useHistory } from "react-router-dom";
import '../teacherEnter.css';

const Teachers = () => {
    let history = useHistory();

    function newClassClick() {
      history.replace("/newClassRoom");
    }

//     EntryCourse()
// {
    
// }

//     const listCourse=()=>{
//         return props.map(a => {
//             return <button onClick={()=> EntryCourse()}> a</button>
//         })
//     }


    return (<div>
     <img className="teachetImg" src={"/images/teacherBack.png"} />
     <img className="logo" src={"/images/logo.png"} />
     <img className="att" src={"/images/att.png"} />
     {/* <img className="test" src={"/images/test.png"} />
     <img className="hw" src={"/images/hw.png"} />
     <img className="plessons" src={"/images/plessons.png"} /> */}
     <button className="previouslessons" >  שיעורים קודמים   </button>

     <button className="test" > צפייה במבחנים  </button>
     <button className="hw" > תרגילים שהוגשו   </button>
     {/* <button className="addendents" >  צפייה בנוכחות   </button> */}
     <button className="addendents" onClick={newClassClick}>  יצירת שיעור חדש   </button>
     </div>
   
    );
    }

 
export default Teachers;