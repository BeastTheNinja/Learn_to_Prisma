import { Link, useLocation } from "react-router";



const Navbar = () => {



    return (
        <nav>
            {/* if already in manage users replace it with go back to adminpage dont need to check for role as admin nav is in a protected route */}
            {useLocation().pathname === "/admin/users" ? (
                <Link to="/admin" className="ml-4 text-blue-500 hover:underline">Dashboard</Link>
            ) : (
                <Link to="/admin/users" className="ml-4 text-blue-500 hover:underline">Manage Users</Link>
            )}
            {
                useLocation().pathname === "/admin/CreateBlog" ? (
                    <Link to="/admin" className="ml-4 text-blue-500 hover:underline">Dashboard</Link>
                ) : (
                    <Link to="/admin/CreateBlog" className="ml-4 text-blue-500 hover:underline">Create Blog</Link>
                )
            }
            {
                useLocation().pathname === "/admin/createuser" ? (
                    <Link to="/admin" className="ml-4 text-blue-500 hover:underline">Dashboard</Link>
                ) : (
                    <Link to="/admin/createuser" className="ml-4 text-blue-500 hover:underline">Create User</Link>
                )
            }
            {
                useLocation().pathname === "/admin/edituser" ? (
                    <Link to="/admin" className="ml-4 text-blue-500 hover:underline">Dashboard</Link>
                ) : (
                    <Link to="/admin/edituser" className="ml-4 text-blue-500 hover:underline">Edit User</Link>
                )
            }
            <Link to="/home" className="ml-4 text-blue-500 hover:underline">Home</Link>
            <Link to="/" className="ml-4 text-blue-500 hover:underline">Logout</Link>


        </nav>
    );
};

export default Navbar;