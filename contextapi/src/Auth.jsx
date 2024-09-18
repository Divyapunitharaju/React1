import { createContext, useState } from "react";

const authContenxt = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)

    const login =(data)=>{
        setUser(data)
    }

    const logout =()=>{
        setUser('')
    }

      return(
        <authContenxt.Provider value={{user,login,logout}}>
            {children}
        </authContenxt.Provider>
      )
}

export  {authContenxt,AuthProvider}