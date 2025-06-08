import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const navigate = useNavigate();

  const value = {navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin};

  return
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
};
