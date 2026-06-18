import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/user.services";
import UserItem from "../components/UserItem";

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");

    const handleDeleteUser = async (id: number) => {
        try {
            await deleteUser(id);

            setUsers((prev) =>
                prev.filter((user) => user.id !== id)
            );
        } catch (err) {
            setError("Failed to delete user" + err);
        }
    };

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                setError(
                    "Failed to fetch users" +
                    (err instanceof Error ? `: ${err.message}` : "")
                );
            }
        };

        loadUsers();
    }, []);


    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Users</h1>
            

            {error && (
                <p className="text-red-500">{error}</p>
            )}

            <ul className="mt-4 space-y-2">
                {users.map((user) => (
                    <UserItem key={user.id} user={user} onDelete={handleDeleteUser} />
                ))}
            </ul>
        </div>
    );
};

export default UserList;