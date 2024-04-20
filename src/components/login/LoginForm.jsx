import React, { useState } from "react";
import Logo from "../../assets/Fitflex-HD.png";
import secondLogo from "../../assets/react.svg"
import "./LoginForm.css";

const LoginForm = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // // just for testing the context 
  // const handleClick = () =>{ 
  //   updateUser()
  // }

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 
    // so here i neeed to set the data to userContext and set ERRS 

  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 
    // ilyass ma3rftch chnu baghi dir hna 

  };

  return (
    <div className="flex flex-row">
      <div className="blue-bg">
        <div className="flex flex-col items-center justify-center my-20  ">
        <div className="text-white text-3xl font-black text-cenater mb-10">
            <h1> Fitflex مرحبا بك في </h1>
          </div>
          <div className="text-white h-80 w-96">
              <img src={secondLogo} alt="Illustrations" className="h-full w-full" />
          </div>
          <div className="mt-8">
              <h1 className="text-white text-2xl text-center font-black tracking-wide">! شريكك في تحقيق أهدافك الرياضية و إدارة عملائك بكفاءة </h1>
          </div>
        </div>
      </div>
      <div className=" ml-32 mb-20 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center ">
     <div className="logo-container w-50 h-28 mb-4 mt-5">
        <img src={Logo} alt="Logo" className="h-full w-full object-contain" />
    </div>
<form className="text-right " style={{width: "40vw"}}>
  <div className="form-group">
    <label className="block text-xl font-bold my-5 mr-6">: اسم المستخدم</label>
    <input
      type="email"
      name="username"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="أدخل إسم المستخدم "
      className="block w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 pr-10"
      />
  </div>
  <div className="mt-4 form-group">
    <label className="block text-xl font-bold my-5 mr-6">: كلمة المرور</label>
    <input
      type="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="أدخل كلمة المرور "
      className="block w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 mt-4"
    />
  </div>
  {errorMessage && <div className="text-red-500 mr-10 text-l">{errorMessage}</div>}
  <div className="flex flex-row mt-16">
    <div className="w-1/3 ml-12">
      <button
        type="submit"
        id="SignInBtn"
        onClick={handleSignup}
        className="text-white px-4 py-2 rounded mr-2 w-full shadow shadow-black"
      >
        <b>إنشاء حساب</b>
        </button>
    </div>
    <div className="w-1/3 ml-24">
      <button
        type="submit"
        id="LoginBtn"
        onClick={handleLogin}
        className="bg-blue-500 text-white  px-4 py-2 rounded w-full shadow shadow-black"
      >
       <b> تسجيل دخول</b></button>
    </div>
  </div>
</form>
</div> 

      </div>
    </div>
  );
};

export default LoginForm;
