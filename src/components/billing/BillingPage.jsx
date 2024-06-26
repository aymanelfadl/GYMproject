import React, { useState, useEffect } from 'react';
import Header from "../HomePage/Header"
import NavBar from "../navBar/NavBar"
import BillLogoWhite from "../../assets/billwhite.png"
import BillsTable from "./BillingTable";
import DeleteBillModal from "./DeleteBillModal";
import axios from 'axios';
import Loading from '../loading/Loading';





const BillingPage = ({ userCurrent }) => {

    const [data, setData] = useState(null);
    const [dataIsHere, setDataIsHere] = useState(false);



    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/payment/gym/${userCurrent.id}`);
          setData(response.data.payments);
          setDataIsHere(true);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [userCurrent.id]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUserData, setSelectedUserData] = useState(null);
    const [filterOption, setFilterOption] = useState("");

    const formatDate = (inputDate) => {
      const date = new Date(inputDate);
      return new Intl.DateTimeFormat('en-GB').format(date);
    };
    const deletePayment = async () => {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/payment/${selectedUserData.id}`);
        console.log(`Payment ${selectedUserData.id} deleted successfully!`);
        handleDeleteBill();
      } catch (error) {
        console.error(`Error deleting payment ${selectedUserData.id}:`, error);
      }
    };

    const handleSelecteBill =(item) =>{
      console.log(item);
      setSelectedUserData(item);
    }

    const handleDeleteBill = () => {
      const newData = data.filter(user => user.id !== selectedUserData.id);
      setData(newData);
      setSelectedUserData(null);
    };

    
    const filterData = () => {
      let filteredData = [...data];
    
      switch (filterOption) {
        case "today":
          filteredData = filteredData.filter((payment) => {
            const today = new Date().toISOString().split('T')[0];
            const paymentDate = payment.created_at.split('T')[0];
            return paymentDate === today;
          });
          break;
        case "one_week":
          filteredData = filteredData.filter((payment) => {
            const today = new Date();
            const oneWeekAgo = new Date(today);
            oneWeekAgo.setDate(today.getDate() - 7);
            const paymentDate = new Date(payment.created_at);
            return paymentDate >= oneWeekAgo && paymentDate <= today;
          });
          break;
        case "one_month":
          filteredData = filteredData.filter((payment) => {
            const today = new Date();
            const oneMonthAgo = new Date(today);
            oneMonthAgo.setMonth(today.getMonth() - 1);
            const paymentDate = new Date(payment.created_at);
            return paymentDate >= oneMonthAgo && paymentDate <= today;
          });
          break;
        default:
          break;
      }
    
      return filteredData;
    };

    return(
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
                src={BillLogoWhite}
                alt="Illustrations"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="font-bold text-white">
              <h1 className="text-2xl mr-4">سجل الفواتير</h1>
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
              </select>
            </div>
          </div>
          <div>
           {dataIsHere ? (
              <BillsTable
                data={filterData()}
                searchTerm={searchTerm}
                onDeleteBill={handleSelecteBill}
              />
            ) : (
              <Loading />
            )}
          

            {selectedUserData && 
              <DeleteBillModal 
                onClose={() => setSelectedUserData(null)} 
                onConf={deletePayment} 
              />}

          </div>
        </div>
    </div>
</div>
    )
}


export default BillingPage;