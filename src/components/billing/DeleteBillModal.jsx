import { useState } from "react";

const  DeleteBillModal = ({ onClose, userData, onEditUser, onEndUser }) => {

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-6">
          <div className="flex justify-end items-center pt-4">
              <button
                className="text-right text-gray-500 hover:text-gray-700"
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
           <div className="bg-red-500">

            </div> 
          <div className="px-6 py-4 bg-gray-100 flex justify-center ">
            <button
              className="text-white w-1/2 bg-blue-500 hover:bg-blue-800 px-4 py-2 rounded-full mx-10"
              onClick={()=>o(userEdit)}
            >
              تأكيد
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteBillModal;
