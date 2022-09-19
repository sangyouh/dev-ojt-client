import React from "react";
import { reducer, initState } from "./reducer";

export const Context = React.createContext({} as ContextType);

interface ContextType {
  count: number;
  Increment: () => JSX.Element;
  Decrement: () => JSX.Element;
}

interface ProviderProps {
  children: React.ReactNode;
}
export function ContextProvider(props: ProviderProps) {
  const { children } = props;
  // const [count, setCount] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, initState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  // const increment = React.useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  // const decrement = React.useCallback(() => {
  //   setCount(count - 1);
  // }, [count]);

  const Increment = () => <button onClick={increment}>+</button>;
  const Decrement = () => <button onClick={decrement}>-</button>;

  return (
    <Context.Provider value={{ count: state.count, Increment, Decrement }}>
      {children}
    </Context.Provider>
  );
}

export const useCounter = () => React.useContext(Context);
