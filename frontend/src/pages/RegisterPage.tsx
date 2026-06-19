import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router";
const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <RegisterForm />
            <button
                onClick={() => navigate("/")}
                className=" mt-2 p-2 ml-18 bg-green-500 text-white rounded align-center flex justify-center"
            >
                Already have an account? Login
            </button>
        </div>
    )
};
export default RegisterPage;