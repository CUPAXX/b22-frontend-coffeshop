import React, { useState } from "react";

export function Counter({ 
 stateValue, max, onIncrease, onDecrease 
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
        window.alert(`Minimum 0 of these items`);
      }else {
        onDecrease();
        result = counter - 1;
      }
    }
    setCounter(result);
    ;
  };
  return (
    <div className="flex flex-row space-x-2 md:space-x-4  items-center text-base md:text-xl font-bold">
      <button
        onClick={() => onCount("minus")}
        className=" flex justify-center items-center font-bold focus:outline-none w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full"
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => onCount("plus")}
        className="flex justify-center items-center font-bold focus:outline-none w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full"
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