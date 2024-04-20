import Dashboard from "./Dashboard";
import Header from "./Header";

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex flex-1 overflow-hidden">
                {/* Left sidebar */}
                <div className="bg-slate-50 w-1/5 overflow-y-auto">
                    {/* Future Menu */}
                </div>
                {/* Dashboard area */}
                <div className="flex-1 overflow-y-auto">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

export default Home;
