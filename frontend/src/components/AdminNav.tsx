import { Link, useLocation } from "react-router";

const Navbar = () => {
    return (
        <nav className="p-4 mt-4 flex space-x-4 justify-end rounded shadow mb-4">
            {/* if already in manage users replace it with go back to adminpage dont need to check for role as admin nav is in a protected route */}
            {/* TODO style links buttons to look a bit more like buttons */}
            {useLocation().pathname === "/admin/users" ? (
                <Link to="/admin" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Dashboard</Link>
            ) : (
                <Link to="/admin/users" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Manage Users</Link>
            )}
            {
                useLocation().pathname === "/admin/CreateBlog" ? (
                    <Link to="/admin" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Dashboard</Link>
                ) : (
                    <Link to="/admin/CreateBlog" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Create Blog</Link>
                )
            }
            {
                useLocation().pathname === "/admin/createuser" ? (
                    <Link to="/admin" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Dashboard</Link>
                ) : (
                    <Link to="/admin/createuser" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Create User</Link>
                )
            }
            {
                useLocation().pathname === "/admin/edituser" ? (
                    <Link to="/admin" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Dashboard</Link>
                ) : (
                    <Link to="/admin/edituser" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Edit User</Link>
                )
            }
            <Link to="/home" className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Home</Link>
            <Link to="/" className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Logout</Link>


        </nav>
    );
};

export default Navbar;