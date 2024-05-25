import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../navBar/NavBar";
import Header from "../HomePage/Header";
import MambersTable from "./MambersTable";
import MembersLogo from "../../assets/equipeWithe.png";
import AvatareLogo from "../../assets/woman.png";
import "./Mambers.css";
import EditUserModal from "./EditUserModal";
import HistPaymentModal from "./HistPaymentModal";
import AddPaymentModel from './AddPaymentModel';

const Home = ({ accessToken, userCurrent }) => {
  const [paymentHistData, setPaymentHistData] = useState([
    {
      id: 28,
      id_user: 4,
      paid_price: "790.24",
      created_at: "2024-04-18T11:12:16.000000Z",
      updated_at: "2024-04-18T11:12:16.000000Z"
    },
    {
      id: 27,
      id_user: 4,
      paid_price: "405.86",
      created_at: "2024-04-18T11:12:16.000000Z",
      updated_at: "2024-04-18T11:12:16.000000Z"
    },
    {
      id: 29,
      id_user: 4,
      paid_price: "806.28",
      created_at: "2024-04-18T11:12:16.000000Z",
      updated_at: "2024-04-18T11:12:16.000000Z"
    }, {
      id: 30,
      id_user: 4,
      paid_price: "790.24",
      created_at: "2024-04-18T11:12:16.000000Z",
      updated_at: "2024-04-18T11:12:16.000000Z"
    },
    {
      id: 183,
      id_user: 4,
      paid_price: "405.86",
      created_at: "2024-04-18T11:12:16.000000Z",
      updated_at: "2024-04-18T11:12:16.000000Z"
    },
    {
      id: 280,
      id_user: 4,
      paid_price: "806.28",
      created_at: "2024-04-18T11:12:16.000000Z",
      updated_at: "2024-04-18T11:12:16.000000Z"
    }

  ]);
  console.log(accessToken)
  
  const [data,setData] = useState()
  const [dataIsHere,setDataIsHere] = useState(false);

   

  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/client/bygym/${userCurrent.id}`);
            setData(response.data.clients);
            setDataIsHere(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!dataIsHere) {
      console.log("Zz")
        fetchData();
    }
}, [dataIsHere, userCurrent.id]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [selectedUserData, setSelectedUserData] = useState(null);
  const [showEditUser, setShowEditUser] = useState(false);
  const [showHistPayment , setShowHistPayment] = useState(false);
  const [showAddPayment , setShowAddPayment] = useState(false);



  const handleSelectingUser = (selectedUser) => {
    setShowEditUser(true);
    setSelectedUserData(selectedUser);
  };
  const handleSelectingUserPayment = (selectedUser) => {
    setShowHistPayment(true);
    setSelectedUserData(selectedUser);
  };

  const handleEditUser = (userEdit) => {
    const index = data.findIndex((user) => user.id === selectedUserData.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = userEdit;
      setData(newData);
      setShowEditUser(false)
    }
  };

  const handleReturnUser = () =>{
    const index = data.findIndex((user) => user.id === selectedUserData.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index].active = 1;
      setData(newData);
      setShowEditUser(false);
    }
  }

  const handleEndUser = () => {
    const index = data.findIndex((user) => user.id === selectedUserData.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index].active = 0;
      setData(newData);
      setShowEditUser(false);
    }
  };

  const handleHistPayment = (id) =>{
    // ilyas dir chi req dyalk 
    // set hist payment data 
    setSelectedUserData(data.at(id));
    setShowHistPayment(true);
  }

  const filterData = () => {
    let filteredData = [...data]; 
    
    switch (filterOption) {
      case "today":
        filteredData = filteredData.filter((user) => {
          const today = new Date().toISOString().split('T')[0];
          const userDate = user.created_at.split('T')[0];
          console.log("Today:", today);
          console.log("User created_at:", userDate);
          return user.active === 1 && userDate === today;
        });
        break;      
      case "one_week":
          filteredData = filteredData.filter((user) => {
            const today = new Date().toISOString().split('T')[0];
            const oneWeekLater = new Date(today);
            oneWeekLater.setDate(oneWeekLater.getDate() - 7);
            const finalDate = oneWeekLater.toISOString().split('T')[0];
            const userDate = user.created_at.split('T')[0]; 
            return user.active === 1 && finalDate <= userDate && userDate <= today; 
          });
        break;
      case "one_month":
          filteredData = filteredData.filter((user) => {
            const today = new Date().toISOString().split('T')[0]; 
            const oneMonthLater = new Date(today); 
            oneMonthLater.setMonth(oneMonthLater.getMonth() - 1); 
            const finaleDate = oneMonthLater.toISOString().split('T')[0]; 
            const userDate = user.created_at.split('T')[0];
            return user.active === 1 && finaleDate <= userDate && finaleDate <= today;
          });
          break;     
      case "need_to_pay":
        filteredData = filteredData.filter((user) => {
          const today = new Date().toISOString().split('T')[0];
          return user.active === 1 && user.end_date < today;
        });
        break;
      case "end_date":    
        filteredData = filteredData.filter((user) => user.active === 0);
        break;
      default:
        filteredData = filteredData.filter((user) => user.active === 1);
    }
    
    return filteredData;
  };
  
  

  return (
    <div className="flex flex-col h-screen">
      <Header userName={userCurrent.name} />
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
                <option value="need_to_pay">الأعضاء الذين يحتاجون إلى الدفع</option>
                <option value="end_date">الأعضاء الذين انتهت عضويتهم</option>
              </select>
            </div>
          </div>
          <div>
            {dataIsHere&&
              <MambersTable
              data={filterData()}
              searchTerm={searchTerm}
              onEditUser={handleSelectingUser}
              OnAddPayment={handleSelectingUserPayment}
              onOpenHistPayment={handleHistPayment}
            />
          
            }
          

            {showEditUser && (
              <EditUserModal
                onClose={() => setShowEditUser(false)}
                userData={selectedUserData}
                onEditUser={handleEditUser}
                onEndUser={handleEndUser}
                onReturnUser={handleReturnUser}
              />
            )}

            {showHistPayment && (
              <HistPaymentModal 
                userData={selectedUserData}
                userHistPaymentData={paymentHistData}   
                onClose={()=>setShowHistPayment(false)}
              />
            )}
            {showAddPayment &&    <AddPaymentModel idSelectedUser={selectedUserData.id} /> }
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
