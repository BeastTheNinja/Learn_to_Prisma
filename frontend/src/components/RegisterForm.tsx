import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { register } from "../services/auth.services";

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await register({
                firstName,
                lastName,
                email,
                password
            });

            navigate("/");
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Register failed"
            );
        }
    };

    return (
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-80 mx-auto mt-20">
            <h1 className="text-xl font-bold">Register</h1>

            <input
                className="border p-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
            />

            <input
                className="border p-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
            />

            <input
                className="border p-2"
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

            <button className="bg-green-500 text-white p-2">
                Create account
            </button>
        </form>
    );
};

export default RegisterForm;