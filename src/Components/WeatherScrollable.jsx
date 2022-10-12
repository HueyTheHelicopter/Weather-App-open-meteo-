import React from "react";
import cl from './designs/WeatherScrollable.module.css';
import moment from 'moment';


const WeatherScrollable = (props) => {

const hourly = {...props.data.hourly};

function formatDateTime(datetime) {
    var newdate = moment(datetime).format('yyyy.MM.DD HH:mm')
    return(newdate)
}

const view = (array) => {
    const items = array.map((item) => {
        if (typeof(item) === 'string') {
            item = formatDateTime(item);
        }
        return <td>{item}</td>
    })
    return items;
}

return (
    <div className={cl.table_wrapper}>
        <table>
            <tr>
                <th>Date & Time</th>
                {view(hourly.time)}
            </tr>
            <tr>
                <th>Temperature ℃</th>
                {view(hourly.temperature_2m)}
            </tr>
            <tr>
                <th>Relative Humidity</th>
                {view(hourly.relativehumidity_2m)}
            </tr>
            <tr>
                <th>Surface Pressure</th>
                {view(hourly.surface_pressure)}
            </tr>
        </table>
</div>
)

}

export default WeatherScrollable;