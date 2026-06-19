import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <LoginForm />
            <button
                onClick={() => navigate("/register")}
                className=" mt-2 p-2 ml-18 bg-green-500 text-white rounded align-center flex justify-center"
            >
                Don't have an account? Register
            </button>
        </div>
    );
};

export default LoginPage;