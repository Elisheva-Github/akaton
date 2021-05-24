import React from 'react';

import '../newClassRoom.css';

const NewClassRoom = (props) => {



    return (<div>
        <img className="classRoomImg" src={"/images/newClassRoom.PNG"} />
        {/* <select className="test" value={1,2,3} > מספר שיעור   </select> */}
        <br/>
        <input type="number" min="0" max="24"   />
        <br/>
        <input type="text" />
        <br/>
        לבחירת קובץ:
       <input type="file" title="בחר קובץ" /> <br />
        {/* <input type="file" name="file1" >העלאת חומר לימוד</input> */}
        <select name="select1">
            <option value="1">אחד </option>
            <option value="2">שנים/</option>
            <option value="3">שלוש/</option>
            <option value="4">ארבע/</option>
            <option value="5">חמש/</option>
        </select >
        <br/>
        <input type="date" /><br />
        <textarea rows="8" cols="40" dir="rtl">
            הכנס הערה
        </textarea><br />
        <input type="time"/>


                            {/* <img className="test" src={"/images/test.png"} />
         <img className="hw" src={"/images/hw.png"} />
         <img className="plessons" src={"/images/plessons.png"} /> */}
                            {/* <button className="previouslessons" >  שיעורים קודמים   </button>
    
         <button className="test" > צפייה במבחנים  </button>
         <button className="hw" > תרגילים שהוגשו   </button>
         <button className="addendents" >  צפייה בנוכחות   </button> */}
         </div>
       
        );
    }
    
    export default NewClassRoom;