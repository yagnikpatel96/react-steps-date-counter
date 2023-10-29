import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Oct 7 2023");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - 1 - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + 1 + step)}>+</button>
      </div>
      <p>
        <span>{count === 0 && "Today is "}</span>
        <span>{count > 0 && `${count} days from Today is `}</span>
        <span>{count < 0 && `${Math.abs(count)} days ago, it was `}</span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 && step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
