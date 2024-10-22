import { createContext, useContext ,useState} from "react";

const themeContext = createContext();

const ThemeProvider = ({children} ) =>{

const [theme,setTheme]=useState(null)

return(
    <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
)

}



export {themeContext,ThemeProvider}