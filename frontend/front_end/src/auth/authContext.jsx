import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }

        setLoading(false);
    }, []);

    const login = async (credentials) => {
       const res = await api.post("/auth/login", credentials);

       setToken(res.data.token);
       setUser(res.data.user);

     localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    // const login = async () => {
    //     const fakeUser = {id : 1, email: "testuser@test.hu"};
    //     const fakeToken = "fake-jwt-token";
    
    //     setUser(fakeUser);
    //     setToken(fakeToken);
    
    //     localStorage.setItem("token", fakeToken);
    //     localStorage.setItem("user", JSON.stringify(fakeUser));
    // }

    const register = async (data) => {
        await api.post("/auth/register", data);

        setToken(res.data.token);
        setUser(res.data.user);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated: !!user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = () => {
    return useContext(AuthContext);
};
    
