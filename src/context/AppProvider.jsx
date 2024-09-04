import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userResponseDetails, setUserResponseDetails] = useState(null);

  const setUserResponse = (responseDetails) => {
    setUserResponseDetails(responseDetails);
  };

  const getQuestions = (questions) => {
    setQuestions(questions);
  };

  const setUserDataOnLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated,
        setUserDataOnLogin,
        logout,
        questions,
        getQuestions,
        userResponseDetails,
        setUserResponse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
