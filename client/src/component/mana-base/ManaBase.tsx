import { useState, useEffect } from "react";
import { ManaColor } from "../../constant/ManaColor.ts";
import "./manabase.css";

export function ManaBase(props: { color: ManaColor }) {
  const [amount, setAmount] = useState(0);
  const [capacity, setCapacity] = useState(100);

  const [incrementPower, setIncrementPower] = useState(1);

  const containerClasses = `container ${props.color.toLowerCase()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      increment(incrementPower).call(incrementPower);
    }, 1000);

    return () => clearInterval(interval);
  });

  function increment(increment: number) {
    return () => setAmount(amount + increment);
  }

  return (
    <>
      <div className={containerClasses}>
        <div className="bar-container">
          <span className="mana-display">
            {props.color}: {amount} / {capacity}
          </span>
          <button
            className="increment-button"
            onClick={increment(1)}
          >
            Focus {props.color}
          </button>
        </div>
      </div>
    </>
  );
}
