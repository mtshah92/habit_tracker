import { createContext, useState } from "react";
import { habit } from "../db/habit";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [displayHabit, setDisplayHabit] = useState();
  const data = [...habit];

  return (
    <HabitContext.Provider value={{ data, displayHabit, setDisplayHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
