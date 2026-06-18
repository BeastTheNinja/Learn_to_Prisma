import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            <Navbar />
            <p className="mt-4">This is a protected page. Only logged-in users can see this.</p>
        </div>
    );
}

export default HomePage;