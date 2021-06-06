import React from 'react';
import { useHistory } from "react-router-dom";
const Students = () => {

    let history = useHistory();

    function previouslessonsClick() {
      history.replace("s_previouslessons");
    }
    function marksClick() {
      history.replace("/s_marks");
    }
    function hwClick() {
      history.replace("/s_hw");
    }
    function scheduleClick() {
      history.replace("/s_schedule");
    }
    function testClick() {
        history.replace("/s_test");
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
        </div>
    );
}

export default Students;