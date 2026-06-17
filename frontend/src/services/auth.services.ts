import { jwtDecode } from "jwt-decode";

type JwtDecoded = {
    userId: number;
    email: string;
    role: "USER" | "ADMIN";
}


export const getToken = () => {
    return localStorage.getItem("token") ;
};

export const setToken = (token: string) => {
    localStorage.setItem("token", token);
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isLoggedIn = () => {
    return !!localStorage.getItem("token");
};

export const getRole = () => {
    const token = getToken();

    if(!token) return null;

    const decoded = jwtDecode<JwtDecoded>(token);

    return decoded.role;
}