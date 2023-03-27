import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    setIsAuth(true);
    // Ugly way
    //if (token.data.signup) {
    //window.sessionStorage.setItem("token", token.data.signup);
    //}
    //if (token.data.login) {
    //window.sessionStorage.setItem("token", token.data.login);
    //}

    // or ||
    // Ugly fast
    // window.sessionStorage.setItem("token", token.data.login || token.data.signup);
    window.sessionStorage.setItem("token", token);
  };

  return (
    <AppContext.Provider value={{ isAuth, activateAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
