import NavBar from "../navBar/NavBar";
import Dashboard from "./Dashboard";
import Header from "./Header";

const Home = ({ userCurrent }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex flex-1 overflow-hidden">
                <div className="bg-slate-50 w-1/5 overflow-y-auto">
                    <NavBar />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Dashboard userCurrent={userCurrent} />
                </div>
            </div>
        </div>
    );
};

export default Home;
