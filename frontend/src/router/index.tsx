import { createBrowserRouter } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";

import LoginPage from "../pages/LoginPage";
import UsersPage from "../pages/UserPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/users",
        element: (
            <ProtectedRoute>
                <UsersPage />
            </ProtectedRoute>)
    }
]);