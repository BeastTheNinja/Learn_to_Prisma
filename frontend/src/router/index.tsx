import { createBrowserRouter } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";

import LoginPage from "../pages/LoginPage";
import UsersPage from "../pages/Admin/UserPage";
import AdminPage from "../pages/AdminPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([

    // Public routes
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/home",
        element: (
            <HomePage />
        )
    },
    // Admin routes
    {
        path: "/admin/users",
        element: (
            <ProtectedRoute requiredRole="ADMIN">
                <UsersPage />
            </ProtectedRoute>)
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute requiredRole="ADMIN">
                <AdminPage />
            </ProtectedRoute>)
    }
]);