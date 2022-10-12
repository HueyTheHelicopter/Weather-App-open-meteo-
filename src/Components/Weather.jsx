import React, { useState, useEffect, useContext } from "react";
import PostService from "../API/PostService";
import CurrentWeather from "./CurrentWeather";
import WeatherScrollable from "./WeatherScrollable";
import { DateTimeContext, TemperatureContext, RelHumidity } from "../context/context";


const Weather = () => {

    const { setTemperature } = useContext(TemperatureContext);
    const { setDateTimes } = useContext(DateTimeContext);
    const { setHumidity } = useContext(RelHumidity);

    const [forecast, setForecast] = useState('');
    const [i, setIndex] = useState('');

    useEffect(() => {
        if (forecast === '') {
            getData()
        }
    })

    const getData = async () => {
        const data = await PostService.temperature_2m()
        setForecast(data)
        setTemperature(data.data.hourly.temperature_2m)
        setDateTimes(data.data.hourly.time)
        setHumidity(data.data.hourly.relativehumidity_2m)
        let value = data.data.current_weather.time
        setIndex(data.data.hourly.time.findIndex(i => i === value))
    }

    return (
        <div className="WeatherPage">
            {
                forecast === '' ?
                <div>
                    <p>Loading</p>  
                </div>
                :
                <CurrentWeather data={forecast.data} index={i}/>
            }
            {
                forecast === '' ?
                <div>
                    <p>Loading</p>
                </div>
                :
                <WeatherScrollable data={forecast.data}/>
            }
        </div>
    )
}

export default Weather;