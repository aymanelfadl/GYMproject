import NavBar from "../navBar/NavBar";
import Header from "../HomePage/Header";
import MambersTable from "./MambersTable";
import MembersLogo from "../../assets/equipeWithe.png"
import "./Mambers.css"


const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex flex-1 overflow-hidden">
                <div className="bg-slate-50 w-1/5 overflow-y-auto">
                    <NavBar />
                </div>
                <div className="flex-1 overflow-y-auto">

                    <div className="bg-blue-600 text-white py-2 px-6 w-full flex flex-row-reverse items-center">
                        <div className="h-10 w-10 mt-2">
                            <img src={MembersLogo} alt="Illustrations" className="h-full w-full object-contain" />
                        </div>
                        <div className="font-bold text-white">
                            <h1 className="text-2xl mr-4">لوحة القيادة</h1>
                         </div>
                    </div>

                    <div className="flex flex-row-reverse py-4 pr-28">
                       <div className="group ml-20">
                            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                            <input placeholder="...بحث" type="text" className="input outline-blue-500 hover:bg-blue-200 "/>
                        </div>

                        <div>
                            <select id="dateSelected" name="date">
                                <option value="ayman">ayman</option>
                                <option value="ilys">ilys</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <MambersTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;