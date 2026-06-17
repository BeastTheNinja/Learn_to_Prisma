import { logout } from "../services/auth.services";
import { useNavigate } from "react-router";
import { getRole } from "../services/auth.services";

const Navbar = () => {
    const navigate = useNavigate();
    const role = getRole();

    
    return (
        <nav>
            <button
                onClick={() => {
                    logout();
                    navigate("/");
                }}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
                Logout
            </button>
            {role === "ADMIN" && (
                <button
                    onClick={() => navigate("/admin")}
                    className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Admin Page
                </button>
            )}

        </nav>
    );
};

export default Navbar;