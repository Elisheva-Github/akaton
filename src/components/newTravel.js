import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from './header';
import homeBG from '../images/create.png';

import './homePage.css';
import DriverAndPassenger from './driverAndPassenger';

const NewTravel = () => {

  const [showModel, setShowModel] = useState(false);
  const [isDriver, setIsDriver] = useState(false);

  const history = useHistory();

  const passenger = () => {
    setShowModel(true);
    setIsDriver(false);
  }

  const driver = () => {
    setShowModel(true);
    setIsDriver(true);
  }





  return (<div class="bg-img" style={{backgroundImage: `url(${homeBG})`}}>
    <Header />

    <button onClick={() => driver()}> אני נהג   </button>

    <button onClick={() => passenger()}>  אני נוסע   </button>

    <DriverAndPassenger
      show={showModel}
      onHide={(e) => setShowModel(false)}
      isDriver={isDriver}

    />

  </div>

  )

}


export default NewTravel;