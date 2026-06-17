import { getRole } from "../services/auth.services";


type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

type Props = {
    user: User;
    onDelete: (id: number) => void;
};

const UserItem = ({ user, onDelete }: Props) => {
    const role = getRole();
    return (

        <li className="border p-2 rounded">
            <p className="font-bold">
                {user.firstName} {user.lastName}
            </p>
            <p className="text-gray-600">{user.email}</p>
            {/* show delete button if role is admin if not admin role hide */}
            {role === "ADMIN" && (
                <button
                    onClick={() => onDelete(user.id)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            )}
        </li>

    );
};

export default UserItem;