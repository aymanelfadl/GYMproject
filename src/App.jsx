import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'
import Home from './components/HomePage/HomePage'
import Members from './components/MembersPage/Members'
import AddUserPage from './components/AddUser/AddUserPage'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
          <Route path='home' element={<Home />} />
          <Route path='members' element={<Members />} />
          <Route path='add' element={<AddUserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
