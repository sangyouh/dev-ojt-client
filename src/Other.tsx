import React from "react";
import { useCounter } from "contexts";

export function Other() {
  const { count } = useCounter();
  return <div style={{ color: "blue" }}>{count}</div>;
}
