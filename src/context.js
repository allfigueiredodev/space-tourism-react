import React, { useState, createContext } from "react";

export const PrimaryContext = createContext();

export const PrimaryProvider = (props) => {
  const [primaryIndex, setPrimaryIndex] = useState(0);
  
  function primaryHandler(e) {
    setPrimaryIndex(e.target.id);
  }

  return (
    <PrimaryContext.Provider
      value={{
        primaryIndex: primaryIndex,
        primaryHandler: primaryHandler
      }}
    >
      {props.children}
    </PrimaryContext.Provider>
  );
};
