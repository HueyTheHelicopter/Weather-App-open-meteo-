import React, { useState } from "react";
import '../App.css';
import Weather from "./Weather";
import HeatIndexCalc from "./HeatIndexCalc";
import LineChart from "./LineChart";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    function renderFunction(activeTab){
        switch(activeTab) {
            case '1': 
                return <Weather/>
            case '2':
                return <LineChart/>
            case '3':
                return <HeatIndexCalc/>
            default: 
                <Weather/>
        }
    }

    const handleTab1 = () => {
      setActiveTab("1");
    };
    const handleTab2 = () => {
      setActiveTab("2");
    };
    const handleTab3 = () => {
        setActiveTab("3");
    };

    return (
      <div className="Tabs">
        <ul className="nav">
          <li className={activeTab === "1" ? "active" : ""} onClick={handleTab1}>
            Weather Table
          </li>
          <li className={activeTab === "2" ? "active" : ""} onClick={handleTab2}>
            Weather Chart
          </li>
          <li className={activeTab === "3" ? "active" : ""} onClick={handleTab3}>
            Heat Index Calculator
          </li>
        </ul>
   
        <div className="outlet">
          {renderFunction(activeTab)}
        </div>
      </div>
    );
  };
  export default Tabs;