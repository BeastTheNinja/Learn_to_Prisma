import { Outlet } from "react-router";
import Navbar from "../Navbar";

const MainLayout = () => {
    return (
        <div>
            <header className="bg-blue-600 text-white p-4 rounded shadow mb-4 flex justify-center items-center">
                <h1 className="text-2xl font-bold">My Blog App</h1>
            </header>
            <main className="p-4">
                {/* The child routes will be rendered here */}
                <Outlet />
                <Navbar />
            </main>
        </div>
    );
}
export default MainLayout;