import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";   

export const useLogin = () => {
    const [username, setUsername] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token")); // Ambil token dari localStorage


    useEffect(() => {
        if (token) {
            const username = getUsername(token);
            console.log("Username yang didapat:", username);
            setUsername(username);
        } else {
            window.location.href = "/login";
        }
    }, [token]); // Memastikan useEffect berjalan saat token berubah

    return { username, token };
};
export default useLogin;

