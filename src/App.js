import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const [todaysDate, setTodaysDate] = useState(new Date());
  const renderedDate = todaysDate.toString().slice(0, 15);
  // console.log(todaysDate.getDate(), todaysDate.getDate() + 1);
  return (
    <div className="app">
      <Step
        step={step}
        setStep={setStep}
        todaysDate={todaysDate}
        setTodaysDate={setTodaysDate}
      />
      <Count
        count={count}
        setCount={setCount}
        todaysDate={todaysDate}
        setTodaysDate={setTodaysDate}
      />
      <p>
        {count} days from today is {renderedDate}
      </p>
    </div>
  );
}

function Step({ step, setStep, todaysDate, setTodaysDate }) {
  return (
    <div className="container">
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <p>Step: {step}</p>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
    </div>
  );
}

function Count({ count, setCount, todaysDate, setTodaysDate }) {
  function handleIncreaseCount(todaysDate, setTodaysDate) {
    setCount((c) => c + 1);
    const incrDate = todaysDate.getDate() + 1;
    setTodaysDate(new Date(2023, 10, incrDate));
  }

  function handleDecreaseCount(todaysDate, setTodaysDate) {
    setCount((c) => c - 1);
    const decrDate = todaysDate.getDate() - 1;
    setTodaysDate(new Date(2023, 10, decrDate));
  }

  return (
    <div className="container">
      <button onClick={() => handleDecreaseCount(todaysDate, setTodaysDate)}>
        -
      </button>
      <p>Count: {count}</p>
      <button onClick={() => handleIncreaseCount(todaysDate, setTodaysDate)}>
        +
      </button>
    </div>
  );
}

export default App;
