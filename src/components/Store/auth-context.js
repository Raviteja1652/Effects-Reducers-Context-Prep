import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {}
});

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('isLoggedIn')
        if (storedLoggedIn === '1'){
        setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };

    const authValue = {
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    };

    return (
        <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>
    )
};

export default AuthContext;