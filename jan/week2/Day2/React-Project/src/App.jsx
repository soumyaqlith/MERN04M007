
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Foods from './components/Foods'
import About from './components/About'
import Food from './components/Food'
import Login from './components/Login'
import Register from './components/Register'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/foods' element={
          <PrivateRoute>
            <Foods />
          </PrivateRoute>}>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/food/:id' element={<Food />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      {/* <div className="hidden md:block w-30 h-30 rounded-full overflow-hidden shadow-md">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-OyA6eiwQatlRFI2ZrFgTJyXG/"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>  */}

    </div>
  )
}

export default App
