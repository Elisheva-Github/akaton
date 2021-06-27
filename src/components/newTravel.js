 import React, { useState } from 'react';
 import { useHistory } from "react-router-dom";


const NewTravel=()=>
{
    const history = useHistory();
        const passenger =()=>{
           history.replace("/driverAndPassenger");     
        }
    
        const driver =()=>{
            history.replace("/driverAndPassenger");
               
         }





    return(<div>
      <button  onClick={() => driver()}> אני נהג   </button>

      <button  onClick={() => passenger()}>  אני נוסע   </button>



    </div>

    )

}


export default NewTravel;