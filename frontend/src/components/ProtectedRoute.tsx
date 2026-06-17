import { Navigate } from "react-router";
import { isLoggedIn } from "../services/auth.services";

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    if(!isLoggedIn()){
        return <Navigate to="/" replace />
    }

    return children;
}
export default ProtectedRoute;