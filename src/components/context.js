import { createContext, useState } from "react";

 
 export const authcontext=createContext()

 function ContextProvider({children}){

    const [input,setinput]=useState("")
    const [data, setdata]=useState([])

    return <authcontext.Provider value={{input,setinput,data, setdata}}>
        {children}
    </authcontext.Provider>
 }

 export default ContextProvider;