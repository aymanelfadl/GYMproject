import React, { useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests
import Header from "../HomePage/Header";
import NavBar from "../navBar/NavBar";
import AddUserLogo from "../../assets/adduserwhite.png";
import UserInfo from "../../assets/userinfo.png";

const AddUserPage = ({ userCurrent }) => {
  const [imageFile, setImageFile] = useState(null);
  const [picture_file, setPicture_file] = useState(null);


  const [userEdit, setUserEdit] = useState({
    first_name: "",
    date_birth: "",
    phone_number: "",
    end_date: "",
    id_user: userCurrent.id,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
       setPicture_file(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const onEditUser = async (userData) => {
    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }
    if (!(picture_file===null)) {
      console.log("i added image")
      formData.append('picture_file', picture_file);
    }

    try {
      console.log("formdata : "+formData);
      const response = await axios.post('http://127.0.0.1:8000/api/client', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert('Client added successfully');
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client');
    }
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
              <img src={AddUserLogo} alt="Illustrations" className="h-full w-full object-contain" />
            </div>
            <div className="font-bold text-white">
              <h1 className="text-2xl mr-4">إضافة عميل</h1>
            </div>
          </div>
          <div className="flex flex-row items-center mt-4">
            <div className="border-2 mr-8 border-blue-600 w-full" />
            <div className="text-right w-full flex flex-row items-center justify-center">
              <h1 className="mr-4 text-2xl font-black">المعلومات الشخصية</h1>
              <div className="h-10 w-10">
                <img src={UserInfo} alt="Illustrations" className="h-full w-full object-contain" />
              </div>
            </div>
            <div className="border-2 ml-10 border-blue-600 w-full" />
          </div>
          <div className="flex flex-row-reverse items-stretch justify-center mt-4">
            <div className="flex flex-col items-center justify-center bg-slate-50 shadow-lg mb-6 rounded-xl mx-6">
              <div className="relative w-28 h-28 mx-auto mb-4 group bg-slate-200 border-2 border-blue-200  rounded-full">
                {imageFile && <img src={imageFile} alt="logo" className="w-full h-full rounded-full cursor-pointer group-hover:blur boder-4 border-black" />}
                <label
                  htmlFor="fileInput"
                  className={`absolute top-8 right-9 flex items-center justify-center rounded-full w-10 h-10 rounded-full ${imageFile === null ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-opacity cursor-pointer`}
                >
                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
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
              <h1 className="text-blue-600 text-2xl font-black mx-10">إضافة صورة </h1>
            </div>
            <div className="space-y-4 bg-slate-50 shadow-lg mb-6 py-4 rounded-xl w-9/12">
              <div className="flex items-center justify-between mx-12">
                <input
                  type="text"
                  className="border border-salte-400 outline-blue-600 rounded-md px-3 py-2 text-right w-3/5"
                  placeholder="الاسم الكامل"
                  onChange={(e) => {
                    const fullName = e.target.value;
                    setUserEdit({
                      ...userEdit,
                      first_name: fullName,
                    });
                  }}
                />
                <label className="text-lg font-bold text-blue-600">
                  :الاسم الكامل
                </label>
              </div>
              <div className="flex items-center justify-between mx-12">
                <input
                  type="date"
                  className="border border-gray-300 outline-blue-600 rounded-md px-3 py-2 w-3/5"
                  placeholder="تاريخ الميلاد"
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, date_birth: e.target.value })
                  }
                />
                <label className="text-lg font-bold text-blue-600">
                  :تاريخ الميلاد
                </label>
              </div>
              <div className="flex items-center justify-between mx-12">
                <input
                  type="text"
                  className="border border-gray-300 outline-blue-600 rounded-md px-3 py-2 text-right w-3/5"
                  placeholder="رقم الهاتف"
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, phone_number: e.target.value })
                  }
                />
                <label className="text-lg font-bold text-blue-600">
                  :رقم الهاتف
                </label>
              </div>
              {/* Remove the subscription amount input field for now */}
              <div className="flex items-center justify-between mx-12">
                <input
                  type="date"
                  className="border border-gray-300 outline-blue-600 rounded-md px-3 py-2 w-3/5"
                  placeholder="تاريخ انتهاء العضوية"
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, end_date: e.target.value })
                  }
                />
                <label className="text-lg font-bold text-blue-600">
                  :انتهاء العضوية
                </label>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 flex justify-center">
            <button
              className="text-white w-40 bg-blue-500 hover:bg-blue-800 px-4 py-2 rounded-full mx-10"
              onClick={() => onEditUser(userEdit)}
            >
              حفظ
            </button>
          </div>
          <div className="border-4 border-blue-600 w-full" />
        </div>
      </div>
    </div>
  );
};

export default AddUserPage;
