import React, { useState, useEffect } from "react";
import AvatareLogo from "../../assets/woman.png";
import axios from "axios";

const HistPaymentModal = ({ onClose, userData }) => {
  const [paymentHistData, setPaymentHistData] = useState([]);
  const [newPayment, setNewPayment] = useState(0);
  const [paymentIsHere, setPaymentIsHere] = useState(true);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    return new Intl.DateTimeFormat("en-GB").format(date);
  };

  const handleInputChange = (event) => {
    setNewPayment(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/client/payments/${userData.id}`
        );
        setPaymentHistData(response.data.payments);
        setPaymentIsHere(response.data.payments.length === 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userData.id]);

  const addPayment = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/payment", {
        paid_price: newPayment,
        id_user: userData.id,
      });
      console.log("Payment added successfully!");
      setPaymentHistData([response.data, ...paymentHistData]); // Assuming the API returns the added payment
      setNewPayment(0); // Reset the input after successful addition
      setPaymentIsHere(false);
    } catch (error) {
      console.log("An error occurred while adding the payment.");
      console.error(error);
    }
  };

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
                  src={userData.picture_file || AvatareLogo}
                  alt="logo"
                  className="w-full h-full rounded-full boder-4 border-black"
                />
              </div>
              <h1 className="text-center font-bold">{userData.first_name}</h1>
            </div>
            <div className="space-y-4 bg-slate-50 shadow-lg mb-6 py-4 rounded-xl">
              {paymentIsHere ? (
                <h2 className="text-center text-gray-400 mt-4">
                  لا توجد فواتير في الوقت الحالي
                </h2>
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
                      <tr key={item.id}>
                        <td className="border-y-2 border-gray-200 px-4 py-2 ">
                          {index + 1}
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
            <div className="flex items-center justify-between px-4 pb-4">
              <input
                type="number"
                className="border border-slate-400 outline-blue-600 rounded-md px-3 py-2 text-right w-3/5"
                placeholder="المبلغ المالي المؤدى من طرف الزبون"
                value={newPayment}
                onChange={handleInputChange}
              />
              <button
                onClick={addPayment}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                اضافة مدفوعة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistPaymentModal;
