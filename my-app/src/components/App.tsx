import React from 'react';
import './App.css';
import InputCity from './Input/Input';
import OneDayWeather from './oneDayWeather';
import {List} from "../types"


function App() {

  const [weather, setweather] = React.useState<null|List>(null)

  async function fetches(city:string) {

      const responseCords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=9dd8de3ac20f8bb961cdab75750a3b62`)

      const dataCords = await responseCords.json()
      let lon= dataCords[0].lon
      let lat = dataCords[0].lat
      let cnt=1
      await fetchwee(lon,lat,cnt)

  }

  async function fetchwee(lon:Number,lat:Number,cnt:Number){

      const responseWee = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9dd8de3ac20f8bb961cdab75750a3b62`)
       const dataWee = await responseWee.json()
        setweather(dataWee.list)

        console.log(dataWee)

}
            




  return (
    <div className="App">
          <InputCity fetches={fetches}/>
          {/* <OneDayWeather weather={weather} /> */}
          {weather ? <OneDayWeather weather={weather} /> : null}
  </div>
  )
}

export default App;


