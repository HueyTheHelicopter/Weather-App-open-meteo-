import React, { useState } from "react";
import cl from './designs/CurrentWeather.module.css';
import moment from 'moment';

import barometer from '../images/barometer.png'
import thermometerC from '../images/thermometer.png'
import thermometerF from '../images/thermometerF.png'
import humidity from '../images/humidity.png'
import clearSky from '../images/clearSky.png'
import mainlyClear from '../images/mainlyClear.png'
import partlyCloudy from '../images/cloudy.png'
import overcast from '../images/overcast.png'

const CurrentWeather = (data) => {

    const [wStateImg, setWStateImg] = useState(
    {   
        src: '',
        alt: ''
    });

    function translateWeatherCode(wcode) {
        switch(wcode) {
            case(0):
                if (wStateImg.alt !== 'clearSky')
                    setWStateImg({src: clearSky, alt: 'clearSky'})
                return 'Clear Sky';
            case(1):
                if (wStateImg.alt !== 'mainlyClear')
                    setWStateImg({src: mainlyClear, alt: 'mainlyClear'})
                return 'Mainly clear';
            case(2):
                if (wStateImg.alt !== 'partlyCloudy')
                    setWStateImg({src: partlyCloudy, alt: 'partlyCloudy'})
                return 'partly cloudy';
            case(3):
                if (wStateImg.alt !== 'overcast')
                    setWStateImg({src: overcast, alt: 'overcast'})
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
            <div className={cl.content_row}>
                {formatDateTime(data.data.current_weather.time)}
            </div>
            <div className={cl.content_row}>
                <p>{translateWeatherCode(data.data.current_weather.weathercode)}</p>
                <img src={wStateImg.src} alt='wStateImg'></img>
            </div>
            <div className={cl.content_row}>
                <p>{data.data.current_weather.temperature}</p>
                <img src={thermometerC} alt='thermometer℃ img'></img>
            </div>
            <div className={cl.content_row}>
                {'Surface Pressure: ' + data.data.hourly.surface_pressure[data.index] + 'hPa'}
                <img src={barometer} alt='barometer'></img>
            </div>
            <div className={cl.content_row}>
                <p>
                    {'Relative Humidity: ' + data.data.hourly.relativehumidity_2m[data.index] + '%'}
                </p>
                <img src={humidity} alt='humidity img'></img>
            </div>    
        </div>
    )
}

export default CurrentWeather;