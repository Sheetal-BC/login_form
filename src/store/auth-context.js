import React, {useEffect,useState} from 'react';


const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogout : () =>{},
    onLogin:(email, collegeName, password) =>{}
});

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() =>{
        const storedUserLoggedInformation =  localStorage.getItem('isLoggedIn')
      
        if(storedUserLoggedInformation === '1'){
          setIsLoggedIn('true');
        }
      },[]);

    const logoutHandler = () =>{
        localStorage.removeItem('isLogedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () =>{
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return (
    <AuthContext.Provider 
    value={{
        isLoggedIn:isLoggedIn, 
        onLogout:logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider> 
    )
}

export default AuthContext;