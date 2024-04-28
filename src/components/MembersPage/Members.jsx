import NavBar from "../navBar/NavBar";
import Header from "../HomePage/Header";
import MambersTable from "./MambersTable";
import MembersLogo from "../../assets/equipeWithe.png";
import AvatareLogo from "../../assets/woman.png";
import "./Mambers.css";
import { useState, useEffect } from "react";
import EditUserModal from "./EditUserModal";

const Home = () => {
  
  const [data,setData] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      date_birth: "1990-05-15",
      phone_number: "+1234567890",
      end_date: "2025-12-31",
      picture_file: AvatareLogo,
      created_at: "2024-01-18T11:06:24.000000Z",
      updated_at: "2024-04-18T11:06:24.000000Z",
      active: 1
    },
    {
      id: 2,
      first_name: "Alice",
      last_name: "Smith",
      date_birth: "1985-08-25",
      phone_number: "+1987654321",
      end_date: "2024-04-15",
      picture_file: AvatareLogo,
      created_at: "2024-04-29T11:08:24.000000Z",
      updated_at: "2024-04-18T11:08:24.000000Z",
      active: 1
    },
    {
      id: 3,
      first_name: "Emma",
      last_name: "Johnson",
      date_birth: "1993-02-10",
      phone_number: "+1122334455",
      end_date: "2024-08-29",
      picture_file: AvatareLogo,
      created_at: "2024-04-20T11:08:24.000000Z",
      updated_at: "2024-04-18T11:08:24.000000Z",
      active: 1
    },
    {
      id: 10,
      first_name: "Michael",
      last_name: "Brown",
      date_birth: "1980-11-05",
      phone_number: "+1654321876",
      end_date: "2022-09-30",
      picture_file: AvatareLogo,
      created_at: "2024-04-18T11:08:24.000000Z",
      updated_at: "2024-04-18T11:08:24.000000Z",
      active: 0
    },
    {
      id: 4,
      first_name: "John",
      last_name: "Doe",
      date_birth: "1990-05-15",
      phone_number: "+1234567890",
      end_date: "2025-12-31",
      picture_file: AvatareLogo,
      created_at: "2024-04-18T11:06:24.000000Z",
      updated_at: "2024-04-18T11:06:24.000000Z",
      active: 0
    }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserData, setSelectedUserData] = useState(null);
  const [filterOption, setFilterOption] = useState("");

  const handleSelectingUser = (selectedUser) => {
    setSelectedUserData(selectedUser);
  };

  const handleEditUser = (userEdit) => {
    const index = data.findIndex((user) => user.id === selectedUserData.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = userEdit;
      setData(newData);
      setSelectedUserData(null);
    }
  };

  const handleEndUser = () => {
    const index = data.findIndex((user) => user.id === selectedUserData.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index].active = 0;
      setData(newData);
      setSelectedUserData(null);
    }
  };

  const filterData = () => {
    let filteredData = [...data]; 
    
    switch (filterOption) {
      case "today":
        filteredData = filteredData.filter((user) => {
          const today = new Date().toISOString().split('T')[0];
          return user.created_at === today;
        });
        break;
      case "one_week":
        filteredData = filteredData.filter((user) => {
          const today = new Date();
          const oneWeekLater = new Date(today);
          oneWeekLater.setDate(oneWeekLater.getDate() + 7);
          return user.created_at <= oneWeekLater.toISOString().split('T')[0];
        });
        break;
      case "one_month":
        filteredData = filteredData.filter((user) => {
          const today = new Date();
          const oneMonthLater = new Date(today);
          oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
          return user.created_at <= oneMonthLater.toISOString().split('T')[0];
        });
        break;
      case "need_to_pay":
        filteredData = filteredData.filter((user) => {
          const today = new Date().toISOString().split('T')[0];
          return user.end_date < today;
        });
        break;
      case "end_date":    
        filteredData = filteredData.filter((user) => { return user.active === 0 });
        break;
        default:
        return data;
      }
    return filteredData;
  };
  

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="bg-slate-50 w-1/5 overflow-y-auto">
          <NavBar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="bg-blue-600 text-white py-2 px-6 w-full flex flex-row-reverse items-center">
            <div className="h-10 w-10 mt-2">
              <img
                src={MembersLogo}
                alt="Illustrations"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="font-bold text-white">
              <h1 className="text-2xl mr-4">لوحة القيادة</h1>
            </div>
          </div>
          <div className="flex flex-row-reverse py-4 pr-28">
            <div className="group ml-20">
              <svg
                className="icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="...بحث"
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="input outline-blue-500 hover:bg-blue-200 "
              />
            </div>
            <div>
              <select
                id="dateSelected"
                name="date"
                onChange={(e) => setFilterOption(e.target.value)}
                className="text-right mt-2 pr-2 border-gray-200 border-2 rounded-full"
              >
                <option value="">حدد خيار التصفية</option>
                <option value="today">اليوم</option>
                <option value="one_week">اسبوع واحد</option>
                <option value="one_month">شهر واحد</option>
                <option value="need_to_pay">الناس الذين يحتاجون إلى الدفع</option>
                <option value="end_date">الأشخاص الذين أنهوا موعدهم</option>
              </select>
            </div>
          </div>
          <div>
            <MambersTable
              data={filterData()}
              searchTerm={searchTerm}
              onEditUser={handleSelectingUser}
            />
            {selectedUserData && (
              <EditUserModal
                onClose={() => setSelectedUserData(null)}
                userData={selectedUserData}
                onEditUser={handleEditUser}
                onEndUser={handleEndUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
