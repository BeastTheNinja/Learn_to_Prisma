import { useEffect, useState } from "react";
import { getToken } from "../services/auth.services";
import { logout } from "../services/auth.services";
import { useNavigate } from "react-router";


type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = getToken();

                const response = await fetch(
                    "http://localhost:3000/users",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    setError(data.error || "Failed to fetch users");
                    return;
                }

                setUsers(data);
            } catch (err) {
                setError("Server error:" + err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Users</h1>
            <button
                onClick={() => {
                    logout();
                    navigate("/");
                }}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
                Logout
            </button>

            {error && (
                <p className="text-red-500">{error}</p>
            )}

            <ul className="mt-4 space-y-2">
                {users.map((user) => (
                    <li key={user.id} className="border p-2">
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;