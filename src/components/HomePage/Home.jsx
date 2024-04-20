import Dashboard from "./Dashboard";
import Header from "./Header";



const Home = () => {
    

    return(
        <div class="flex flex-col h-screen">
            <Header/>
            <div class="flex flex-1">
                <div class="bg-slate-50 w-1/5">
                    {/* Future Menu */}
                </div>
                <div class="flex-1">
                    <Dashboard />
                </div>
            </div>
        </div>
    
    )
}
export default Home;