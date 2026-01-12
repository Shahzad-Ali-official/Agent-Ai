import { createContext, useEffect, useState } from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {

 const [input, setInput] = useState("");
 const [recentPrompt, setRecentPrompt] = useState("");
 const [prevPrompts, setPrevPrompts] = useState([]);
 const [showResults, setShowResults] = useState(false);
 const [loading, setLoading] = useState(false);
 const [resultData, setResultData] = useState("");



    const onSent = async (prompt) => {
       const response = await run(prompt);
       console.log(response);
    }

   /* useEffect(() => {
        onSent("write an poem");
    }, []) */
    
    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResults,
        
        loading,
        
        resultData,
        
        onSent,
   }
 return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
 )
}
export default ContextProvider;