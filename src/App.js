import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App(){
  return (
    <div className="App">
      <Steps />
      <Counter />
    </div>
  );
}


function Steps(){
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);
  return (
    <>
      <button className="close" onClick={()=> setOpen((is) => !is)}>&times;</button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : "" }>1</div>
            <div className={step >= 2 ? "active" : "" }>2</div>
            <div className={step >= 3 ? "active" : "" }>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button style={{backgroundColor: '#7950f1', color: '#fff'}} onClick={handlePrevious}>Previous</button>
            <button style={{backgroundColor: '#7950f1', color: '#fff'}} onClick={handleNext}>Next</button>
          </div>
        </div>
      )}  
    </>
  )

  function handlePrevious(){
    if(step > 1) { setStep((s) => s - 1); }
  }

  function handleNext(){
    if(step < 3) { setStep((s) => s + 1); }
  }
}

function Counter(){
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date('Oct 7 2023');
  date.setDate(date.getDate() + count);
  return (<div>
    <div>
      <button onClick={() => setStep((c) => c - 1 )}>-</button>
        <span>Steps : {step}</span>
      <button onClick={() => setStep((c) => c + 1 )}>+</button>
    </div>
    <div>
      <button onClick={() => setCount((c) => c - 1 - step )}>-</button>
        <span>Count : {count}</span>
      <button onClick={() => setCount((c) => c + 1 + step )}>+</button>
    </div>
    <p>
      <span>{count === 0 && 'Today is '}</span>
      <span>{count > 0 && `${count} days from Today is `}</span>
      <span>{count < 0 && `${Math.abs(count)} days ago, it was `}</span>
      <span>{date.toDateString()}</span>
    </p>
  </div>)
}
