import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 rounded shadow-md">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative overflow-hidden ">
                <div className="space-y-4 ">
                    {/* The child routes will be rendered here */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
export default AuthLayout;