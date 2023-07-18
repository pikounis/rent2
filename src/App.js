import React, { useState, useMemo } from 'react';
// import logo from './logo.svg';
import logo2 from './home.png';
import './App.css';

function App() {
  const [weekly, setWeekly] = useState();
  const [monthly, setMonthly] = useState();

  const calculateWeeklyToMonthly = useMemo(() => {
    return ((weekly * 52) / 12);
  }, [weekly]);

  const calculateMonthlyToWeekly = useMemo(() => {
    return ((monthly * 12) / 52);
  }, [monthly]);

  const handleWeeklyChange = (event) => {
    setWeekly(event.target.value);
  };

  const handleMonthlyChange = (event) => {
    setMonthly(event.target.value);
  };

  return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo2} className="App-logo" alt="logo" />
            <h3>Weekly to Monthly</h3>
            {/*{weekly && <h1>£ {calculateWeeklyToMonthly.toFixed()}</h1>}*/}
            {weekly && <h1> £{weekly} per week = £{calculateWeeklyToMonthly.toFixed()} per month</h1>}
            <input
                value={weekly}
                onChange={handleWeeklyChange}
                type="number"
                pattern="\d*"
            />
          </div>

          <div className="div-space">
            <h3>Monthly to Weekly</h3>
            {/*{monthly && <h1> £ {calculateMonthlyToWeekly.toFixed()}</h1>}*/}
            {monthly && <h1> £{monthly} per month = £{calculateMonthlyToWeekly.toFixed()} per week</h1>}
            <input
                value={monthly}
                onChange={handleMonthlyChange}
                type="number"
                pattern="\d*"
            />
          </div>
        </header>
      </div>
  );
}

export default App;