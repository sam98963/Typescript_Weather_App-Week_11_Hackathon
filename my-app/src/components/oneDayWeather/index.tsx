
import {List, MainClass, Weather} from "../../types"



function OneDayWeather (props: { weather:[List] | null }){

    if (props.weather!==null){
        let temp :null|MainClass  = props.weather[0].main
        let description :null|Weather = props.weather[0].weather[0]
        let descriptionUpper = description.description.charAt(0).toUpperCase()
        let descriptionEnd = description.description.slice(1,(description.description.length))
        
return(
    <>
    <div id="description">
        <div>
            <h1>Forecast:</h1>
            <h3>{descriptionUpper + descriptionEnd}</h3>
        </div>
    </div>
    <div id="temperatures">
        <div id="Current">
        <h1>Current Temperature:</h1>
        <p>{Math.round((temp.temp - 273.15)*100)/100} °C</p>
        </div>
        <div id="Max">
        <h1>Max Temperature:</h1>
        <p>{Math.round((temp.temp_max - 273.15)*100)/100} °C</p>
        </div>
        <div id="Min">
        <h1>Min Temperature:</h1>
        <p>{Math.round((temp.temp_min - 273.15)*100)/100} °C</p>
        </div>
        <div id="Feels-like">
        <h1>Currently Feels Like:</h1>
        <p>{Math.round((temp.feels_like - 273.15)*100)/100} °C</p>
        </div>
    </div>
    
    </>
)
} else {
    return(<>Weather Loading...</>)
}

}

export default OneDayWeather