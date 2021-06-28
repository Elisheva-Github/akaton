import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from './header';

const instructions=()=>
{
   
   return(<div>
             <Header/>

       <div>
           הוראות לניסוח וכתיבה
       </div>

   </div>

   )

}


export default instructions;