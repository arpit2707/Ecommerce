import { createContext } from "react";

const LoginContext=createContext({
   token:"",
   loginToken:()=>{},
   logoutToken:()=>{}
})

export default LoginContext;