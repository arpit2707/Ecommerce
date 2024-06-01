import React, { useState } from "react";
import LoginContext from "./LoginContext";

const LoginContextStore = (props) => {
  const localtoken = localStorage.getItem("token");
  const [token, settoken] = useState(localtoken);
  const [login, setLogin] = useState(false);

  const loginToken = (id) => {
    setLogin(true);
    settoken(id);
  };

  const logoutToken = () => {
    settoken(null);
    setLogin(false);
  };

  const store = {
    token: token,
    loginToken: loginToken,
    logoutToken: logoutToken,
    logins: login,
  };
  return (
    <LoginContext.Provider value={store}>
      {" "}
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextStore;
