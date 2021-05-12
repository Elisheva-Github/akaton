import React from 'react';
import TeacherEnter  from './components/teacherEnter'
import StudentEnter  from './components/studentEnter'

const Login = () => {

    loggin=()=>{
       if(1){
           <TeacherEnter></TeacherEnter>
       }
       else 
             <StudentEnter></StudentEnter>


    }

    return (
    <div>
        <div >Enter name:
         <input/>
         </div>
         
         
         <div >Enter password:
         <input/>
         </div>
         
        
       <button onClick={()=> loggin()} >Login:</button>
    </div>
    );
}

export default Login;