import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AnalyseLogo from "../../assets/analyse.png";
import AddUserLogo from "../../assets/adduser.png";
import MembersLogo from "../../assets/equipeWithe.png";
import MembersLogoBlue from "../../assets/equipe.png";
import AddUserLogoBlue from "../../assets/adduserwhite.png";
import AnalyseLogoBlue from "../../assets/analyseBlue.png";
import OutLogoBlue from "../../assets/out.png";
import BillLogoWhite from "../../assets/billwhite.png";
import BillLogoBlue from "../../assets/billBlue.png";

const NavBar = ({ setLoadingUser }) => {
  const location = useLocation();
  const navigate = useNavigate();  // <-- useNavigate hook

  const onLogout = () => {
    setLoadingUser(true);
    localStorage.removeItem("accessToken");
  
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-grow">
        <NavLink
          to="/home"
          className={`flex flex-row items-center px-4 justify-between h-16 ${
            location.pathname === "/home"
              ? "bg-blue-600 hover:text-white"
              : "bg-slate-50 hover:bg-blue-100"
          }`}
        >
          <img
            src={location.pathname === "/home" ? AnalyseLogo : AnalyseLogoBlue}
            alt="logo"
            className="w-8 h-8"
          />
          <div
            className={`text-xl font-bold ${
              location.pathname === "/home" ? "text-white" : "text-blue-500"
            }`}
          >
            لوحة القيادة
          </div>
        </NavLink>
        <NavLink
          to="/members"
          className={`flex flex-row items-center px-4 justify-between h-16 ${
            location.pathname === "/members"
              ? "bg-blue-600 hover:text-white"
              : "bg-slate-50 hover:bg-blue-100"
          }`}
        >
          <img
            src={
              location.pathname === "/members" ? MembersLogo : MembersLogoBlue
            }
            alt="logo"
            className="w-8 h-8"
          />
          <div
            className={`text-xl font-bold ${
              location.pathname === "/members" ? "text-white" : "text-blue-500"
            }`}
          >
            سجل الزبائن
          </div>
        </NavLink>
        <NavLink
          to="/add"
          className={`flex flex-row items-center px-4 justify-between h-16 ${
            location.pathname === "/add"
              ? "bg-blue-600 hover:text-white"
              : "bg-slate-50 hover:bg-blue-100"
          }`}
        >
          <img
            src={location.pathname === "/add" ? AddUserLogoBlue : AddUserLogo}
            alt="logo"
            className="w-8 h-8"
          />
          <div
            className={`text-xl font-bold ${
              location.pathname === "/add" ? "text-white" : "text-blue-500"
            }`}
          >
            إضافة زبون جديد
          </div>
        </NavLink>
        <NavLink
          to="/billing"
          className={`flex flex-row items-center px-4 justify-between h-16 ${
            location.pathname === "/billing"
              ? "bg-blue-600 hover:text-white"
              : "bg-slate-50 hover:bg-blue-100"
          }`}
        >
          <img
            src={
              location.pathname === "/billing" ? BillLogoWhite : BillLogoBlue
            }
            alt="logo"
            className="w-8 h-8"
          />
          <div
            className={`text-xl font-bold ${
              location.pathname === "/billing" ? "text-white" : "text-blue-500"
            }`}
          >
            سجل الفواتير
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink
                  to="/"

          onClick={onLogout}  // <-- use onClick here
          className="flex flex-row items-center px-4 justify-between h-16 bg-slate-50 hover:bg-blue-100"
        >
          <img src={OutLogoBlue} alt="logo" className="w-8 h-8" />
          <div className="text-xl font-bold text-blue-500">خروج</div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
