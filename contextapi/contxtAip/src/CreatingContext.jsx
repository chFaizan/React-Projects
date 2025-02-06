import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) =>{
    const [username, setUsername] = useState(null);
    const login = (name) => setUsername({name});
    const logout = () => setUsername(null);
    return(

     <UserContext.Provider value={{username,login,logout}} >{children}</UserContext.Provider>)
}






















//Basic  Example

// import { createContext } from "react";
// export const Contexts = createContext();
// export const NodeState = ({childern})=>{
//     const information={
//         "name":"Faizan",
//         "age":22,
//         "semster":"2nd",
//     };
//     return <Contexts.Provider value={information}>{children}</Contexts.Provider>
    
// }
