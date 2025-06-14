import { createContext,useState } from "react";

const DarkModeContext = createContext();

    const DarkModeProvider = ({children})=>{
        const [isDarkMode,setIsDarkMode]=useState(true);
        return(
            <DarkModeContext.Provider value={{isDarkMode,setIsDarkMode}}>
                {children}
            </DarkModeContext.Provider>
        );
    };

export { DarkModeContext };
export default DarkModeProvider;