import DeleteLogo from "../../assets/delete.png";

const DeleteBillModal = ({ onClose, onConf }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
          <div className="px-6 py-6">
            <div className="flex justify-end items-center">
              <button
                className="text-right text-white hover:text-slate-200 w- bg-red-600 w-12 pl-3 shadow-lg shadow-gray-300 border-xl"
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
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-right">
              <div className="mr-4 md:mr-0 mb-4 md:mb-0">
                <img src={DeleteLogo} alt="deleteLogo" className="w-28 h-28" />
              </div>
              <div className="font-bold text-3xl whitespace-nowrap border-b-2 mx-4 pb-4">
                هل أنت متأكد من حذف هذه الفاتورة ؟
              </div>
            </div>
            <div className="text-center mt-10">
              <button
                className="text-white shadow-xl  w-1/5 bg-red-600 hover:bg-red-800 px-4 py-2 rounded-full mx-auto"
                onClick={onConf}
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
