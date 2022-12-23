import React, { useState, createContext } from "react";

export const PrimaryContext = createContext();

export const PrimaryProvider = (props) => {
  const [primaryIndex, setPrimaryIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  function primaryHandler(e) {
    setPrimaryIndex(e.target.id);
  }

  return (
    <PrimaryContext.Provider
      value={{
        primaryIndex: primaryIndex,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        primaryHandler: primaryHandler
      }}
    >
      {props.children}
    </PrimaryContext.Provider>
  );
};
