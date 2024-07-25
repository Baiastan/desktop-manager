import React, { createContext, useContext, useEffect, useState } from "react";
import Subject from "./Subject";

//create a subject instance
const stateSubject = new Subject();

//create a context to provide state
const StateContext = createContext();

//custom hook to use state in components

const useGlobalState = () => {
  return useContext(StateContext);
};

const Store = ({ children }) => {
  const [state, setState] = useState({ count: 0 });

  useEffect(() => {
    const observer = {
      update: (newState) => setState(newState),
    };
    stateSubject.subscribe(observer);
    return () => stateSubject.unsubscribe(observer);
  }, []);

  const increment = () => {
    const newState = { count: state.count + 1 };
    stateSubject.notify(newState);
  };

  return <StateContext.Provider value={{ state, increment }}>{children}</StateContext.Provider>;
};

export { useGlobalState, Store };
