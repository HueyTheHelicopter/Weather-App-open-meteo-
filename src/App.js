import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import HeatIndexCalc from './Components/HeatIndexCalc';
import LineChart from './Components/LineChart';
import Tabs from './Components/Tabs';
import Weather from './Components/Weather';
import { DateTimeContext, TemperatureContext, RelHumidity } from './context/context';

function App() {

  const [temperature, setTemperature] = useState('');
  const [datetimes, setDateTimes] = useState('');
  const [humidity, setHumidity] = useState('');

  return (
    <div className="App">
      <div className='Tabs'>
        <RelHumidity.Provider value={{humidity, setHumidity}}>
          <TemperatureContext.Provider value={{temperature, setTemperature}}>
            <DateTimeContext.Provider value={{datetimes, setDateTimes}}>
              <Tabs/>
            </DateTimeContext.Provider>
          </TemperatureContext.Provider>
        </RelHumidity.Provider>
      </div>
    </div>
  );
}

export default App;
