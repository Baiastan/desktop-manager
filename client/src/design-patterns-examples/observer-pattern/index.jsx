import React from "react";
import { Store } from "./Store";
import Counter from "./Counter";

const ObserverPattern = () => {
  return (
    <Store>
      <Counter />
    </Store>
  );
};

export default ObserverPattern;
