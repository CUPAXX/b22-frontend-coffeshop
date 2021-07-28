import React, { useEffect, useState } from "react";
import { Counter } from "../components/Counter";

export function SectionBarCounter({
  productName,
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
    <section className="z-20 mb-20 -mt-14 mx-10 md:mx-32 flex flex-col items-center md:flex-row md:space-x-10">
      <section className="bg-white h-36 w-full py-7 rounded-xl shadow-lg flex flex-row items-center justify-between px-5 md:px-24">
        <img
          src={picture}
          alt="food"
          className=" h-10 w-10 md:w-24 md:h-24 rounded-full object-cover"
        />
        <div className="flex-1 md:space-y-3 ml-5 md:ml-10">
          <h4>{productName}</h4>
          {item.map((variants) => {
            return (
              <h5 key={variants.id}>
                x{variants.amount} {variants.name}
              </h5>
            );
          })}
        </div>
        <div>
          {item.map((res, idx) => {
            return (
              <Counter 
              key="coba"
                onIncrease={() => onIncrease(idx)}
                onDecrease={() => onDecrease(idx)}
                stateValue={stateValue}
                max={max}
              />
            );
          })}
        </div>
      </section>
      <section className="my-8 md:my-0 w-60 md:w-80 h-14 md:h-36 rounded-xl bg-yellow-400">
        <button
          onClick={onClick}
          className="focus:outline-none w-full h-full text-md md:text-2xl font-bold text-center"
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