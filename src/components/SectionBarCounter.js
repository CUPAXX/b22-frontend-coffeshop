import React, { useEffect, useState } from "react";
import { Counter } from "../components/Counter";

export function SectionBarCounter({
  title,
  picture,
  stateValue,
  max,
  onClick,
  variants,
}) {
  const [item, setItem] = useState(variants);

  useEffect(() => {
    if (variants.length) {
      setItem(variants);
    }
  }, [variants]);

  const onIncrease = (idx) => {
    const data = [...item];
    data[idx].amount = data[idx].amount + 1;
    console.log("onIncrease");
    setItem(data);
  };
  const onDecrease = (idx) => {
    const data = [...item];
    data[idx].amount = data[idx].amount - 1;
    setItem(data);
  };

  return (
    <section className="z-50 relative -mt-24 mx-32 flex flex-row space-x-10">
      <section className="bg-white h-36 w-full py-7 rounded-xl shadow-lg flex flex-row items-center justify-between px-24">
        <img
          src={picture}
          alt="food"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1 space-y-3 ml-10">
          <h4>{title}</h4>
          {item.map((variants) => {
            return (
              <h5 key="">
                x{variants.amount} {variants.name}
              </h5>
            );
          })}
        </div>
        <div>
          {item.map((res, idx) => {
            return (
              <Counter 
              key=""
                onIncrease={() => onIncrease(idx)}
                onDecrease={() => onDecrease(idx)}
                stateValue={stateValue}
                max={max}
              />
            );
          })}
        </div>
      </section>
      <section className="w-80 h-36 rounded-xl bg-yellow-400">
        <button
          onClick={onClick}
          className="focus:outline-none w-full h-full text-2xl font-bold text-center"
        >
          CHECKOUT
        </button>
      </section>
    </section>
  );
}
SectionBarCounter.defaultProps = {
  variants: [],
};
// export default SectionBarCounter;