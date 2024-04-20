import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'
import Home from './components/HomePage/HomePage'
import ProgressBar from './components/HomePage/ProgressBar'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
          <Route path='home' element={<Home />} />
          <Route path='test' element={<Home />} />
          <Route path='add' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
