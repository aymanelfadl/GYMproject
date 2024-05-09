import { useState } from "react";
import AvatareLogo from "../../assets/woman.png";

const HistPaymentModal = ({ onClose, userHistPaymentData, userData }) => {
  
  const [paymentHistData , setPaymentHistData] = useState(userHistPaymentData);

  function formatDate(inputDate) {
    var parts = inputDate.split('T');
    
    var dateParts = parts[0].split('-');
    
    var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
    
    return formattedDate; 
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-6">
            <div className="flex justify-end items-center pt-4 ">
              <button
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
                onClick={onClose}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="bg-slate-50 shadow-lg mb-4 py-2 rounded-xl">
            <div className="relative w-28 h-28 mx-auto mb-4 group border-2 border-blue-200 rounded-full shadow-md">
              <img
                src={AvatareLogo}
                alt="logo"
                className="w-full h-full rounded-full boder-4 border-black"
              />
            </div>
              <h1 className="text-center font-bold">{userData.first_name} {userData.last_name}</h1>
            </div>
            <div className="space-y-4 bg-slate-50 shadow-lg mb-6 py-4 rounded-xl">
                {paymentHistData.length === 0 ? (
                    <h2 className="text-center text-gray-400 mt-4">لا توجد فواتير في الوقت الحالي </h2>
                ) : (
                    <table className="w-11/12 mx-auto text-center shadow-lg">
                        <thead className="bg-blue-200 text-black">
                            <tr className="headerTh">
                                <th></th>
                                <th>المبلغ المسدد</th>
                                <th>تاريخ الدفع</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistData.map((item, index) => (
                                <tr
                                key={item.id}>
                                    <td className="border-y-2 border-gray-200 px-4 py-2 ">
                                        {index+1}
                                    </td>
                                    <td className="border-y-2 border-gray-200 px-4 py-2 ">
                                      {item.paid_price} MAD
                                    </td>
                                    <td className="border-y-2 border-gray-200 px-4 py-2 ">
                                      {formatDate(item.created_at)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistPaymentModal;
