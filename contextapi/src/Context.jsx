import { useState } from "react";
import { createContext } from "react";

const themeContext=createContext();


const ThemeProvider=({children})=>{
       const [Theme,setTheme]=useState('light');

       return(
          <themeContext.Provider value={{Theme,setTheme}}>
             {children}   
          </themeContext.Provider>
       )
}
export {themeContext,ThemeProvider}