import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <LoginForm />
            <button
                onClick={() => navigate("/register")}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            >
                Don't have an account? Register
            </button>
        </div>
    );
};

export default LoginPage;