import { createBrowserRouter } from "react-router";

import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import AdminLayout from "../components/layout/AdminLayout";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

import DashboardPage from "../pages/AdminPage";
import UsersPage from "../pages/Admin/UserPage";
import BlogsPage from "../pages/Admin/BlogPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            }
        ]
    },

    {
        element: <MainLayout />,
        children: [
            {
                path: "/home",
                element: <HomePage />
            }
        ]
    },

    {
        path: "/admin",
        element: (
            <ProtectedRoute requiredRole="ADMIN">
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: "users",
                element: <UsersPage />
            },
            {
                path: "blogs",
                element: <BlogsPage />
            }
        ]
    }
]);