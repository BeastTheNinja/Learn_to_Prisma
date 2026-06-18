import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { login } from "../services/auth.services";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await login(email, password);
            navigate("/home");
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Login failed"
            );
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80 mx-auto mt-20">
            <h1 className="text-xl font-bold">Login</h1>

            <input
                className="border p-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <input
                className="border p-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            {error && <p className="text-red-500">{error}</p>}

            <button className="bg-blue-500 text-white p-2">
                Login
            </button>
        </form>
    );
};

export default LoginForm;