import { useState } from "react";
import type { SubmitEvent } from "react";
import { setToken } from "../services/auth.services";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (
        e: SubmitEvent
    ) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:3000/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Login failed");
                return;
            }

            setToken(data.token);

            navigate("/users");

        } catch (err) {
            setError(
                "Server error" +
                (err instanceof Error ? `: ${err.message}` : "")
            );
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 w-80 mx-auto mt-20"
        >
            <h1 className="text-xl font-bold">Login</h1>

            <input
                className="border p-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="border p-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
                <p className="text-red-500">{error}</p>
            )}

            <button
                className="bg-blue-500 text-white p-2"
                type="submit"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;