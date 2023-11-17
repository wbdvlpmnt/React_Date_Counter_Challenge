import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [todaysDate, setTodaysDate] = useState(new Date());

  return (
    <div className="app">
      <Step step={step} setStep={setStep} />
      <Count
        count={count}
        setCount={setCount}
        todaysDate={todaysDate}
        setTodaysDate={setTodaysDate}
        step={step}
      />
      <Message count={count} step={step} todaysDate={todaysDate} />
    </div>
  );
}

function Message({ step, count, todaysDate }) {
  const renderedDate = todaysDate.toString().slice(0, 15);
  return (
    <p>
      {count * step < 0 ? -1 * count * step : count * step}{" "}
      {count * step === 1 || count * step === -1 || count * step === 0
        ? "day"
        : "days"}{" "}
      {count * step < 0 ? "ago" : "from today"} is {renderedDate}
    </p>
  );
}

function Step({ step, setStep }) {
  return (
    <div className="container">
      <button onClick={() => setStep((s) => s - 1)}>-</button>
      <p>Step: {step}</p>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
    </div>
  );
}

function Count({ count, setCount, todaysDate, setTodaysDate, step }) {
  function handleIncreaseCount() {
    setCount((c) => c + 1);
    const incrDate = todaysDate.getDate() + 1 * step;
    const currMonth = todaysDate.getMonth();
    const currYear = todaysDate.getFullYear();
    setTodaysDate(new Date(currYear, currMonth, incrDate));
  }

  function handleDecreaseCount() {
    setCount((c) => c - 1);
    const decrDate = todaysDate.getDate() - 1 * step;
    const currMonth = todaysDate.getMonth();
    const currYear = todaysDate.getFullYear();
    setTodaysDate(new Date(currYear, currMonth, decrDate));
  }

  return (
    <div className="container">
      <button onClick={handleDecreaseCount}>-</button>
      <p>Count: {count}</p>
      <button onClick={handleIncreaseCount}>+</button>
    </div>
  );
}

export default App;
