import React, { createContext, useContext, useState } from "react";

const SignupContext = createContext();

export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({});

  const saveSignupData = (key, value) => {
    setSignupData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <SignupContext.Provider value={{ signupData, saveSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};
