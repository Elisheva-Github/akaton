import React from 'react';
import { useHistory } from "react-router-dom";
import {attendanceToServer} from '../../services/attendance'

const Students = (props) => {

    let history = useHistory();
    
    function previouslessonsClick() {
      history.replace("s_previouslessons");
    }
    function marksClick() {
      history.replace("/s_marks");
    }
    function hwClick() {

      

     // history.replace("/s_hw");
    }
    function scheduleClick() {
      history.replace("/s_schedule");
    }
    function testClick() {
        history.replace("/s_test");
      }
      
      const enterLessonClick = async (firstName) => {
        let date= new Date();
        try {

            const res = await attendanceToServer(firstName,date );
            console.log(res);
            alert("ברישום בוצע בהצלחה!! ברוכים הבאים לבית סיפרנו!!!!😊😊")
            history.replace("/zoom");
        }
        catch (error) {
            alert("הרישום נכשל😒");
        }
    }






       
      
      

    return (
        <div>
            <div>
                <img className="logo" src={"/images/logo.png"} />
            </div>
            <button className="previouslessons" onClick={previouslessonsClick} >  שיעורים קודמים   </button>
            <button className="test" onClick={marksClick}> צפיה בציונים   </button>
            <button className="hw" onClick={hwClick}> תרגילים שהוגשו   </button>
            <button className="schedule" onClick={scheduleClick}>  מערכת שעות   </button>
            <button className="test" onClick={testClick}>  מבחנים  </button>


            
            {/* <button className="button" onClick={()=>enterLessonClick(firstName)}>  כניסה לשיעור  </button> */}

           
        </div>
    );
}

export default Students;