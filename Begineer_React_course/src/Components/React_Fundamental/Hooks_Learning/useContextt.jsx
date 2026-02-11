import React,{useState,useContext,createContext} from "react";

const ThemeContext = createContext(null);

function ThemeProvider({children}){
    const [isDark,setIsDark] =useState(false);


    const themetoggle =() =>{
        setIsDark(!isDark);
    }

    return (
        <ThemeContext.Provider value={{isDark,themetoggle}}>
            {children}
        </ThemeContext.Provider>
    )
};

function Navbar (){
    const {isDark,themetoggle} = useContext(ThemeContext);

    return(
        <nav style={{
            background: isDark ? '#333' : "#f0f0f0",
            padding:'20px',
            color: isDark ? 'white' : 'black'
        }}>
                 <h2>My App</h2>
                <button onClick={themetoggle}>
                    Switch to {isDark ? 'Light' : 'Dark'} Mode
                </button>

        </nav>
    )
};

export default Navbar;
export {ThemeProvider};