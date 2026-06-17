import { createBrowserRouter } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";

import LoginPage from "../pages/LoginPage";
import UsersPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/users",
        element: (
            <ProtectedRoute>
                <UsersPage />
            </ProtectedRoute>)
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute requiredRole="ADMIN">
                <AdminPage />
            </ProtectedRoute>
        )
    }
]);