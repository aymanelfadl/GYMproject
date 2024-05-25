import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import Home from './components/HomePage/HomePage';
import Members from './components/MembersPage/Members';
import AddUserPage from './components/AddUser/AddUserPage';
import BillingPage from './components/billing/BillingPage';
import axios from 'axios'; // Import axios for making HTTP requests

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [userCurrent, setUserCurrent] = useState(null); // State to store user data
  const [loadingUser, setLoadingUser] = useState(true); // State to track loading user data

  // Function to retrieve access token from localStorage
  const getAccessToken = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  };

  // Function to fetch user data based on access token
  const fetchUserCurrent = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/userToken', {
        headers: {
          'Authorization': `Bearer ${accessToken}` // Pass access token in Authorization header
        }
      });
      setUserCurrent(response.data.data.user); // Set user data in state
      setLoadingUser(false); // Set loading to false once user data is fetched
      // here i want to navigate to /home
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getAccessToken(); // Call the function to get access token when component mounts
    if (accessToken) {
      fetchUserCurrent(); // Fetch user data if access token is available
    }
  }, [accessToken]); // Run effect whenever access token changes

 
  return (
    <BrowserRouter> {/* Wrap App component with BrowserRouter */}
      <Routes>
        <Route path='/' element={<LoginForm />}/>
       
        {/* Render Members route only when user data is available */}
        {loadingUser ? null : (
          <>
            <Route path='home' element={<Home userCurrent={userCurrent} />} />
            <Route path='members' element={<Members userCurrent={userCurrent} />} />
            <Route path='add' element={<AddUserPage userCurrent={userCurrent} />} />
            <Route path='billing' element={<BillingPage  userCurrent={userCurrent} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
