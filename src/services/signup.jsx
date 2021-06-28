export const signupToServer=(date,hour,departure, destination,payment,gender,numPassengers,email, phoneNamber,emailAlerts,userType) => {
    fetch('http://localhost:3000/createTravel', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date,
        hour,
        departure,
         destination,
         payment,
         gender,
         numPassengers,
         email, 
         phoneNamber,
         emailAlerts,
         userType
      })
    });
    }