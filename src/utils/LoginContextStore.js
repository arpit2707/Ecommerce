import React, { useState } from "react";
import LoginContext from "./LoginContext";

const LoginContextStore = (props) => {

    const localtoken= localStorage.getItem("token")
  const [token, settoken] = useState(localtoken);

  const loginToken = (id) => {
    settoken(id);
  };

  const logoutToken = () => {
    settoken(null);
  };

  const store = {
    token: token,
    loginToken: loginToken,
    logoutToken: logoutToken,
  };
  return <LoginContext.Provider value={store}> {props.children}</LoginContext.Provider>;
};

export default LoginContextStore;
