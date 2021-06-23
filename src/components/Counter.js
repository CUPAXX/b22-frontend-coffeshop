import React, { useState } from "react";

export function Counter({ 
  onValueChange, stateValue, max, onIncrease, onDecrease 
}) {
  const [counter, setCounter] = useState(stateValue);

  const onCount = (type) => {
    let result = counter;
    if (type === "plus") {
      if (counter === max) {
        window.alert(`There are only ${max} of these items`);
      } else {
        onIncrease();
        result = counter + 1;
      }
    }
    if (type === "minus") {
      if (counter < 0) {
        window.alert(`There are only ${max} of these items`);
      }else {
        onDecrease();
        result = counter - 1;
      }
    }
    setCounter(result);
    // onValueChange(result);
  };
  return (
    <div className="flex flex-row space-x-4 items-center text-xl font-bold">
      <button
        onClick={() => onCount("minus")}
        className="font-bold focus:outline-none w-8 h-8 bg-yellow-400 text-xl text-center rounded-full"
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => onCount("plus")}
        className="font-bold focus:outline-none w-8 h-8 bg-yellow-400 text-xl text-center rounded-full"
      >
        +
      </button>
    </div>
  );
}
Counter.defaultProps = {
  onIncrease: () => {},
  onDecrease: () => {},
};
// export default Counter;