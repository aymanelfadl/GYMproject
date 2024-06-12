import { useState } from "react";
import axios from "axios";

const EditUserModal = ({
  onClose,
  userData,
  onEditUser,
  onEndUser,
  onReturnUser,
}) => {
  const [userEdit, setUserEdit] = useState(userData);
  const [newImage, setNewImage] = useState(userData.picture_file);
  const [imageIsHere, setImageIsHere] = useState(false);
  const [newImageFile, setNewImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
        setUserEdit({
          ...userData,
          picture_file: reader.result,
        });
        setImageIsHere(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateClient = async (clientData) => {
    const formData = new FormData();

    // Append all attributes to formData
    formData.append("first_name", clientData.first_name);
    formData.append("date_birth", clientData.date_birth);
    formData.append("phone_number", clientData.phone_number);
    formData.append("end_date", clientData.end_date);

    if (imageIsHere) {
      formData.append("picture_file", newImageFile);
    }

    // Log the formData object before making the API call

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/client/${clientData.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Client updated successfully", response.data);
      onEditUser(clientData);
    } catch (error) {
      console.error(
        "Error updating client:",
        error.response ? error.response.data : error.message
      );
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
            <div className="relative w-28 h-28 mx-auto mb-4 group border-2 border-blue-200 rounded-full">
              <img
                src={newImage}
                alt="logo"
                className="w-full h-full rounded-full cursor-pointer group-hover:blur border-4 border-black"
              />
              <label
                htmlFor="fileInput"
                className="absolute top-8 right-8 flex items-center justify-center w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <input
                  id="fileInput"
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M14 4 C8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 21.132812 12 C 20.079884 12 19.101556 12.55485 18.560547 13.457031 L 16.724609 16.513672 C 16.542289 16.815645 16.218154 17 15.867188 17 L 11 17 C 9.9069372 17 9 17.906937 9 19 L 9 35 C 9 36.093063 9.9069372 37 11 37 L 39 37 C 40.093063 37 41 36.093063 41 35 L 41 19 C 41 17.906937 40.093063 17 39 17 L 34.132812 17 C 33.779742 17 33.456382 16.817444 33.275391 16.515625 A 1.0001 1.0001 0 0 0 33.275391 16.513672 L 31.439453 13.457031 C 30.898444 12.55485 29.919615 12 28.867188 12 L 21.132812 12 z M 12 14 C 11.448 14 11 14.448 11 15 L 11 16 L 15 16 L 15 15 C 15 14.448 14.552 14 14 14 L 12 14 z M 21.132812 14 L 28.867188 14 C 29.21876 14 29.543618 14.182556 29.724609 14.484375 A 1.0001 1.0001 0 0 0 29.724609 14.486328 L 31.558594 17.542969 C 32.099603 18.445103 33.079884 19 34.132812 19 L 39 19 L 39 35 L 11 35 L 11 19 L 15.867188 19 C 16.919615 19 17.897599 18.446016 18.439453 17.544922 A 1.0001 1.0001 0 0 0 18.441406 17.542969 L 20.275391 14.486328 A 1.0001 1.0001 0 0 0 20.275391 14.484375 C 20.456335 14.18265 20.779742 14 21.132812 14 z M 25 20 C 21.145849 20 18 23.145852 18 27 C 18 30.854148 21.145849 34 25 34 C 28.854151 34 32 30.854148 32 27 C 32 23.145852 28.854151 20 25 20 z M 34 20 A 1 1 0 0 0 34 22 A 1 1 0 0 0 34 20 z M 25 22 C 27.773271 22 30 24.226731 30 27 C 30 29.773269 27.773271 32 25 32 C 22.226729 32 20 29.773269 20 27 C 20 24.226731 22.226729 22 25 22 z"></path>
                </svg>
              </label>
            </div>

            <div className="space-y-4 bg-slate-50 shadow-lg mb-6 py-4 rounded-xl">
              <div className="flex items-center justify-between mx-12">
                <input
                  type="text"
                  className="border border-slate-400 outline-blue-600 rounded-md px-3 py-2 text-right w-3/5"
                  placeholder="الاسم الكامل"
                  value={userEdit.first_name}
                  onChange={(e) => {
                    const fullName = e.target.value;
                    setUserEdit({
                      ...userEdit,
                      first_name: fullName,
                    });
                  }}
                />
                <label className="text-lg font-bold text-blue-600">
                  الاسم الكامل
                </label>
              </div>
              <div className="flex items-center justify-between mx-12">
                <input
                  type="date"
                  className="border border-gray-300 outline-blue-600 rounded-md px-3 py-2 w-3/5"
                  placeholder="تاريخ الميلاد"
                  value={userEdit.date_birth}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, date_birth: e.target.value })
                  }
                />
                <label className="text-lg font-bold text-blue-600">
                  تاريخ الميلاد
                </label>
              </div>
              <div className="flex items-center justify-between mx-12">
                <input
                  type="text"
                  className="border border-gray-300 outline-blue-600 rounded-md px-3 py-2 text-right w-3/5"
                  placeholder="رقم الهاتف"
                  value={userEdit.phone_number}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, phone_number: e.target.value })
                  }
                />
                <label className="text-lg font-bold text-blue-600">
                  رقم الهاتف
                </label>
              </div>

              <div className="flex items-center justify-between mx-12">
                <input
                  type="date"
                  className="border border-gray-300 outline-blue-600 rounded-md px-3 py-2 w-3/5"
                  placeholder="تاريخ انتهاء العضوية"
                  value={userEdit.end_date}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, end_date: e.target.value })
                  }
                />
                <label className="text-lg font-bold text-blue-600">
                  انتهاء العضوية
                </label>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-100 flex justify-center">
            {userEdit.active === 1 ? (
              <button
                className="text-white w-1/2 bg-red-500 hover:bg-red-800 px-4 py-2 rounded-full mx-10"
                onClick={() => onEndUser(userEdit)}
              >
                انهاء العضوية
              </button>
            ) : (
              <button
                className="text-white w-1/2 bg-green-500 hover:bg-green-800 px-4 py-2 rounded-full mx-10"
                onClick={() => onReturnUser(userEdit)}
              >
                إعادة العضوية
              </button>
            )}
            <button
              className="text-white w-1/2 bg-blue-500 hover:bg-blue-800 px-4 py-2 rounded-full mx-10"
              onClick={() => updateClient(userEdit)}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
