import { createContext, useState, useContext } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  const buttonEnter = () => setCursorVariant("button");
  const leave = () => setCursorVariant("default");

  return (
    <CursorContext.Provider value={{ cursorVariant, textEnter, leave ,buttonEnter}}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
