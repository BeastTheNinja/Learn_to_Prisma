import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router";
const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <RegisterForm />
            <button
                onClick={() => navigate("/")}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
                Already have an account? Login
            </button>
        </div>
    )
};
export default RegisterPage;