import React, { useState} from 'react';
import logo2 from './home.png';
import './App.css';

function App() {
  const [weekly, setWeekly] = useState('');
  const [monthly, setMonthly] = useState('');

  const handleWeeklyChange = (event) => {
    const weeklyValue = event.target.value;
    setWeekly(weeklyValue);
    if (weeklyValue) {
      setMonthly(((weeklyValue * 52) / 12).toFixed());
    } else {
      setMonthly('');
    }
  };

  const handleMonthlyChange = (event) => {
    const monthlyValue = event.target.value;
    setMonthly(monthlyValue);
    if (monthlyValue) {
      setWeekly(((monthlyValue * 12) / 52).toFixed());
    } else {
      setWeekly('');
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo2} className="App-logo" alt="logo" />
            <h3>Weekly</h3>
            <input
                value={weekly}
                onChange={handleWeeklyChange}
                type="tel"
                pattern="\d*"
            />
          </div>

          <div className="div-space">
            <h3>Monthly</h3>
            <input
                value={monthly}
                onChange={handleMonthlyChange}
                type="tel"
                pattern="\d*"
            />
          </div>
        </header>
      </div>
  );
}

export default App;
