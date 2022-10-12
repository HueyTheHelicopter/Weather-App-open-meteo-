import React from "react";
import cl from './designs/CurrentWeather.module.css';
import moment from 'moment';

const CurrentWeather = (data) => {

    function translateWeatherCode(wcode) {
        switch(wcode) {
            case(0):
                return 'Clear Sky';
            case(1):
                return 'Mainly clear';
            case(2):
                return 'partly cloudy';
            case(3):
                return 'overcast';
            default: 
                return 'state unknown';
        }
    }

    function formatDateTime(datetime) {
        var newdate = moment(datetime).format('yyyy Do MMMM HH:mm')
        return(newdate)
    }

    return (
        <div className={cl.content}>
            <h1>Current Weather</h1>
                {'Date and Time: ' + formatDateTime(data.data.current_weather.time)}
                    <p></p>
                {'Weather State: ' + translateWeatherCode(data.data.current_weather.weathercode)}
                    <p></p>
                {'Temperature: ' + data.data.current_weather.temperature + '℃'}
                    <p></p>
                {'Surface Pressure: ' + data.data.hourly.surface_pressure[data.index]}
                    <p></p>
                {'Relative Humidity: ' + data.data.hourly.relativehumidity_2m[data.index]}
        </div>
    )
}

export default CurrentWeather;