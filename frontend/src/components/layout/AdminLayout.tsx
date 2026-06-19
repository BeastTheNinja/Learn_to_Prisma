import { Outlet } from "react-router";
import AdminNav from "../AdminNav";

const AdminLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-800 text-white p-4 rounded shadow mb-4 flex justify-center items-center ">
                <h1>Admin Dashboard</h1>
            </header>
            <main className="p-4 flex-1 bg-gray-100 rounded shadow mb-4 relative overflow-hidden ">
                {/* The child routes will be rendered here */}
                <Outlet />
                <AdminNav />
            </main>
        </div>
    );
}

export default AdminLayout;