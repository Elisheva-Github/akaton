import React ,{useState}from 'react';
import '../newClassRoom.css';

const NewClassRoom = (props) => {
    const [numLesson, setNumLesson] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    return (<div>
        <img className="classRoomImg" src={"/images/newClassRoom.PNG"} />
        {/* <select className="test" value={1,2,3} > מספר שיעור   </select> */}
        <br/>
        <input className="numLesson" type="number" min="0" max="24"   
         value={numLesson} onChange={(e) =>{ 
            console.log(e.target.value)
            setNumLesson(e.target.value)}}/>
        <br/>
        <input type="text" 
         value={lessonName} onChange={(e) =>{ 
            console.log(e.target.value)
            setLessonName(e.target.value)}}/>
        <br/>
        לבחירת קובץ:
       <input type="file" title="בחר קובץ" /> <br />
        {/* <input type="file" name="file1" >העלאת חומר לימוד</input> */}      
        <br/>
        <input className="dateLesson" type="date" /><br />
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