import React, { useState } from "react";
import '../App.css';

const HeatIndexCalc = () => {

    const [temperature, setTemperature] = useState('');
    const [rhumidity, setRhumidity] = useState('');
    const [activeLi, setActiveLi] = useState('C');

    const [heatIndexF, setHeatIndexF] = useState('');
    const [heatIndexC, setHeatIndexC] = useState('');

    function celsToFahr(celsius) {
        let F = (9/5) * celsius + 32;
        return F
    }

    function fahrToCels(fahr) {
        let C = 5/9 * (fahr - 32)
        return C
    }

    const setFahrenheit = () => {
        setActiveLi('F')
    }

    const setCelsius = () => {
        setActiveLi('C')
    }

    const calculator = (t_val = '', rh = '') => {

        if (rh === '') {
            setTemperature('')
            alert('Relative Humidity must be provided')
        } else if ((activeLi === 'C' && t_val < 26.7)
                                     ||
                   (activeLi === 'F' && t_val < 80)) {
            setTemperature('')
            setRhumidity('')
            alert('Heat Index cannot be calculated for temperatures less than 26.7℃ or 80\u2109')
        } else if (t_val === '') {
            setTemperature('')
            setRhumidity('')
            alert('temperature must be provided')
        } 
        else if (activeLi === 'C' && t_val !== ''){
            var f = celsToFahr(t_val);
        } else {
            f = t_val
        }

        let value = -42.379 + (2.04901523 * f) + (10.14333127 * rh)
        - (0.22475541 * f * rh) - (.00683783 * f * f) - 
        (.05481717 * rh * rh) + (.00122874 * f * f * rh) +
        (.00085282 * f * rh * rh) - (.00000199 * f * f * rh * rh); 

        let value_cels = fahrToCels(value)

        setHeatIndexC(Math.floor(value_cels))
        setHeatIndexF(Math.floor(value))
        
        setTemperature('')
        setRhumidity('')
    }

    return (
        <div className='heatIndexWrapper'>
            <div>
                <h2>Heath Index Calculator</h2>
            </div>
            <div className='Switchers'>
                <ul className="degres">
                    <li className={activeLi === "F" ? "active" : ""} onClick={setFahrenheit}>
                        {'\u2109'}
                    </li>
                    <li className={activeLi === "C" ? "active" : ""} onClick={setCelsius}>
                        ℃
                    </li>
                </ul>
            </div>
            <div className='calc_inputs'>
                <input
                type='number' 
                value = {temperature}
                onChange={e => setTemperature(e.target.value)}
                placeholder={activeLi === 'C' ? 'temperature in ℃' : 'temperature in \u2109'}
                />

                <input
                type='number'
                value={rhumidity}
                onChange={e => setRhumidity(e.target.value)}
                placeholder={'relative humidity in %'}/>
            </div>
            <div className='calc_result'>
                {
                    heatIndexF === '' || isNaN(heatIndexF) ?
                        <div></div>
                    :
                    <p>{heatIndexF + '\u2109 /' + heatIndexC + '℃'}</p>
                }
            </div>
            <div className='calc_button'>
                <button onClick={() => calculator(temperature, rhumidity)}>calculate</button>
            </div>
    </div>
    )
}

export default HeatIndexCalc;