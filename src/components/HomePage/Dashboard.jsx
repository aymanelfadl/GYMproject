import React, { useState, useEffect } from 'react';
import AnalysisLogo from "../../assets/analyse.png";
import IncomeLogo from "../../assets/generous.png";
import CoinLogo from "../../assets/coin.png";
import UsersLogo from "../../assets/users.png";
import UserCountLogo from "../../assets/userIcon.png";
import DayLogo from "../../assets/day.png";
import WeekLogo from "../../assets/week.png";
import MonthLogo from "../../assets/month.png"
import NoMoneyLogo from "../../assets/nomoney.png"
import ProgressBar from "./ProgressBar";
import axios from 'axios';

const Dashboard = ({ userCurrent }) => {

    const [clientsData, setClientsData] = useState(null);
    const [incomeData, setIncomeData] = useState(null);
    const [dataIsHere, setDataIsHere] = useState(false);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/dashboardNumbers/${userCurrent.id}`);
                setClientsData(response.data.timeClients);
                console.log(response.data.timeClients)

                setDataIsHere(true);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (!dataIsHere) {
            console.log("Fetching data...");
            fetchData();
        }
    }, [dataIsHere]); //
    

    return (
        <div>
            <div className="bg-blue-600 text-white py-2 px-6 w-full flex flex-row-reverse items-center">
                <div className="h-10 w-10 mt-2">
                    <img src={AnalysisLogo} alt="Illustrations" className="h-full w-full object-contain" />
                </div>
                <div className="font-bold text-white">
                    <h1 className="text-2xl mr-4"> لوحة القيادة</h1>
                </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-full h-full">
                    <div className="flex justify-center items-center bg-white-200">
                        <div className="flex flex-row items-center bg-white w-3/5 rounded-lg p-6 mt-12 mb-10 shadow-xl">
                            <div className="h-20 w-20 mr-4">
                                <img src={IncomeLogo} alt="Illustrations" className="h-full w-full object-contain" />
                            </div>
                            <div className="flex flex-col justify-center ml-6">
                                <div className="text-3xl font-black text-blue-700 mb-2 ">
                                    <h1>الدخل الإجمالي</h1>
                                </div>
                                <div className="flex items-center">
                                    <div>
                                        <h1 className="ml-5 text-xl font-bold">0</h1>
                                    </div>
                                    <div className="h-8 w-8 ml-6">
                                        <img src={CoinLogo} alt="Illustrations" className="h-full w-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center self-center mt-10 items-center w-3/4 rounded-lg mb-10 shadow-xl">
                        <div className="flex flex-col w-full h-full">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex-grow h-1 bg-blue-600 ml-6 mr-2 mt-4 rounded-lg  shadow-xl"/>
                                <div className="ml-auto text-3xl font-black text-blue-700 p-2 mt-3 mr-4">
                                    <h1>المداخيل</h1>
                                </div>
                            </div>
                            <div className="flex flex-col px-4" style={{borderRadius: 100}}>
                                <div>
                                    <ProgressBar data={100} total={100} IconLogo={DayLogo} Date={"هذا اليوم"}/>
                                </div>
                                <div>
                                    <ProgressBar data={50} total={100} IconLogo={WeekLogo} Date={"هذا الأسبوع"}/>
                                </div>
                                <div className="mb-8">
                                    <ProgressBar data={20} total={100} IconLogo={MonthLogo} Date={"هذا الشهر"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full">
                    <div className="flex justify-center items-center bg-white-200">
                        <div className="flex flex-row items-center bg-white w-3/5 rounded-lg p-6 mt-12 mb-10 shadow-xl">
                            <div className="h-20 w-20 mr-4">
                                <img src={UsersLogo} alt="Illustrations" className="h-full w-full object-contain" />
                            </div>
                            <div className="flex flex-col justify-center ml-6">
                                <div className="text-3xl font-black text-blue-700 mb-2 ">
                                    <h1>إجمالي العملاء</h1>
                                </div>
                                <div className="flex items-center">
                                    <div>
                                        <h1 className="ml-8 text-xl font-bold">{clientsData?clientsData.allClients:0}</h1>
                                    </div>
                                    <div className="h-5 w-4 ml-2 mt-1">
                                        <img src={UserCountLogo} alt="Illustrations" className="h-full w-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center self-center items-center w-3/4 rounded-lg mb-10 shadow-xl">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex-grow h-1 bg-blue-600 ml-6 mr-2 mt-4 rounded-lg  shadow-xl"/>
                                <div className="ml-auto text-3xl font-black text-blue-700 p-2 mt-3 mr-4">
                                    <h1>العملاء</h1>
                                </div>
                            </div>
                            <div className="flex flex-col px-4" style={{borderRadius: 100}}>
                                <div>
                                    <ProgressBar data={clientsData?clientsData.unactiveClients:0} total={100} Date={"العملاء بدون دفع"} MiniLogo={NoMoneyLogo} hasRedBorder={true}/>
                                </div>
                                <div>
                                    <ProgressBar data={clientsData?clientsData.dayClients:0} total={clientsData?clientsData.weekClients:100}  Date={"عملاء اليوم"} MiniLogo={UserCountLogo}/>
                                </div>
                                <div >
                                    <ProgressBar data={clientsData?clientsData.weekClients:0} total={clientsData?clientsData.monthClients:100}  Date={"عملاء الأسبوع"} MiniLogo={UserCountLogo}/>
                                </div>
                                <div className="mb-8">
                                    <ProgressBar data={clientsData?clientsData.monthClients:0} total={clientsData?clientsData.monthClients:100}  Date={"عملاءالشهر"} MiniLogo={UserCountLogo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
