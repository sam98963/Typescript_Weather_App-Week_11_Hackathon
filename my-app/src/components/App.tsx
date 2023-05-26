import React from 'react';
import './App.css';

function App() {


  async function Fetches(city:string) {

      const responseCords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=9dd8de3ac20f8bb961cdab75750a3b62`)

      const dataCords = await responseCords.json()
      console.log(dataCords)
      let lon= dataCords[0].lon
      let lat = dataCords[0].lat
      let cnt=1
      fetchwee(lon,lat,cnt)

  }

  async function fetchwee(lon:Number,lat:Number,cnt:Number){

        const responseWee = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9dd8de3ac20f8bb961cdab75750a3b62`)

       const dataWee = await responseWee.json()
        console.log(dataWee)
  }


   

    Fetches("london")



  return (
    <div className="App">
   
    </div>
  );
}

export default App;