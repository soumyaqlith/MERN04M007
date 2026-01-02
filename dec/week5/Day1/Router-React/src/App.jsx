
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Dashboard from './component/Dashboard'
import Service from './component/Service'
import Login from './component/Login'
import Profile from './component/Profile'
import Cart from './component/Cart'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dash' element={<Dashboard />}>
          <Route path='profile/:userid' element={<Profile />}></Route>
          <Route index element={<Cart />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
