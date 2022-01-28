import { useState, useContext, createContext } from "react";

const AuthTokenContext = createContext();
const AuthTokenUpdateContext = createContext();

export const useToken = () => {
    return useContext(AuthTokenContext);
};

export const useSetToken = () => {
    return useContext(AuthTokenUpdateContext);
};

function AuthTokenProvider({ children }) {
    const [token, setToken] = useState("");

    const joeBama = (newTok) => setToken(newTok);

    return (
        <AuthTokenContext.Provider value={token}>
            <AuthTokenUpdateContext.Provider value={joeBama}>
                {children}
            </AuthTokenUpdateContext.Provider>
        </AuthTokenContext.Provider>
    );
}

export default AuthTokenProvider;
