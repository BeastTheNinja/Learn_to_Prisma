import UsersList from "../../components/UserList";
const UsersPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <UsersList />
        </div>
    );
};

export default UsersPage;