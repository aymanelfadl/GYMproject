import { NavLink, useLocation } from 'react-router-dom';
import AnalyseLogo from "../../assets/analyse.png";
import AddUserLogo from "../../assets/adduser.png";
import MembersLogo from "../../assets/equipeWithe.png"
import OutLogo from "../../assets/outwhite.png";
import MembersLogoBlue from "../../assets/equipe.png";
import AddUserLogoBlue from "../../assets/adduserwhite.png";
import AnalyseLogoBlue from "../../assets/analyseBlue.png";
import OutLogoBlue from "../../assets/out.png";

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col flex-grow">
                <NavLink to="/home" className={`flex flex-row items-center px-4 justify-between h-16 ${location.pathname === '/home' ? 'bg-blue-600 hover:text-white' : 'bg-slate-50 hover:bg-blue-100'}`}>
                    <img src={location.pathname === "/home" ? AnalyseLogo : AnalyseLogoBlue} alt="logo" className="w-8 h-8" />
                    <div className={`text-xl font-bold ${location.pathname === "/home" ? 'text-white' : 'text-blue-500'}`}>لوحة القيادة</div>
                </NavLink>
                <NavLink to="/members" className={`flex flex-row items-center px-4 justify-between h-16 ${location.pathname === '/members' ? 'bg-blue-600 hover:text-white' : 'bg-slate-50 hover:bg-blue-100'}`}>
                    <img src={location.pathname === "/members" ?  AddUserLogoBlue : AddUserLogo } alt="logo" className="w-8 h-8" />
                    <div className={`text-xl font-bold ${location.pathname === "/members" ? 'text-white' : 'text-blue-500'}`}>الأعضاء</div>
                </NavLink>
                <NavLink to="/add" className={`flex flex-row items-center px-4 justify-between h-16 ${location.pathname === '/add' ? 'bg-blue-600 hover:text-white' : 'bg-slate-50 hover:bg-blue-100'}`}>
                    <img src={location.pathname === "/add" ? MembersLogo : MembersLogoBlue} alt="logo" className="w-8 h-8" />
                    <div className={`text-xl font-bold ${location.pathname === "/add" ? 'text-white' : 'text-blue-500'}`}>إضافة عضو جديد</div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/" className={`flex flex-row items-center px-4 justify-between h-16 bg-slate-50 hover:bg-blue-100`}>
                    <img src={OutLogoBlue} alt="logo" className="w-8 h-8" />
                    <div className="text-xl font-bold text-blue-500">خروج</div>
                </NavLink>
            </div>
        </div>
    )
} 

export default NavBar;
