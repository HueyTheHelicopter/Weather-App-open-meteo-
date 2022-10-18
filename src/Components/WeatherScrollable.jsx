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
        <div className={cl.table_headers}>
            <h4>Date and Time</h4>
            <h4>Temperature ℃</h4>
            <h4>Relative Humidity</h4>
            <h4>Surface Pressure</h4>
        </div>
        <div className={cl.table_data}>
            <div className={cl.table_row}>
                {
                    Object.values(hourly.time).map((item) => {
                        return <p>{formatDateTime(item)}</p> })
                }
            </div>
            <div className={cl.table_row}>
                {
                    Object.values(hourly.temperature_2m).map((item) => {
                        return <p>{item}</p> })
                }
            </div>
            <div className={cl.table_row}>
                {
                    Object.values(hourly.relativehumidity_2m).map((item) => {
                        return <p>{item}</p> })
                }
            </div>
            <div className={cl.table_row}>
                {
                    Object.values(hourly.surface_pressure).map((item) => {
                        return <p>{item}</p> })
                }
            </div>
        </div>
        {/* <table>
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
        </table> */}
    </div>
)

}

export default WeatherScrollable;