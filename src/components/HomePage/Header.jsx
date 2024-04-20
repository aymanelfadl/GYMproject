import { useState } from "react"
import Logo from "../../assets/Fitflex-HD.png"
import AvatreLogo from "../../assets/man.png"


const Header = () => {
    
    const [user , setUser] = useState("ilyas bnv");

    return(
        <div className="flex flex-row justify-end items-center h-20 bg-slate-50">
        {/* <div className="logo-container w-50 h-16 mb-4 mt-2 pl-8 ">
             <img src={Logo} alt="Logo" className="h-full w-full object-contain" />
        </div> */}
        <div className="flex flex-row items-center justify-end h-18">
            <div className="p-4 font-bold">
                <h2>{user}</h2>
            </div>
            <div className="h-10 pr-8">
                <img src={AvatreLogo} alt="Logo" className="h-full w-full object-contain " />
            </div>
        </div>
    </div>
    )
}

export default Header;