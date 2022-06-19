import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const value = {
    todos,
    setTodos,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
