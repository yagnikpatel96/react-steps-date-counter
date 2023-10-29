import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);
  return (
    <>
      <button className="close" onClick={() => setOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}> {messages[step - 1]} </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f1" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f1" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
  function StepMessage({ step, children }) {
    return (
      <div className="message">
        <h3>Step {step}</h3> {children}
      </div>
    );
  }

  function Button({ textColor, bgColor, onClick, children }) {
    return (
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
}
