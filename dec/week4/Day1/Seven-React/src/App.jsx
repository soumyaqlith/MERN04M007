
import { useState } from 'react'
import './App.css'
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  if (isLogin) {
    return (
      <>
        <Navbar isLogin={isLogin} />
        <Dashboard />
      </>
    )
  } else {
    return (
      <>
        <Navbar setIsLogin={setIsLogin} />
        <Home />
      </>
    )
  }
}

export default App
