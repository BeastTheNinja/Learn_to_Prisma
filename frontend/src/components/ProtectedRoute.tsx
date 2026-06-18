import { Navigate } from "react-router";
import { isLoggedIn, getRole } from "../services/auth.services";
import AdminNav from "./AdminNav";

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string;
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
    if (!isLoggedIn()) {
        return <Navigate to="/" replace />;
    }

    const role = getRole();

    if (requiredRole && role !== requiredRole) {
        return <Navigate to="/" replace />;
    }


    return (
        <>
            <AdminNav />
            {children}
        </>
    )
};

export default ProtectedRoute;