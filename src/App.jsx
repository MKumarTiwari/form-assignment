import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Table from './pages/Table'
import Update from './components/Form/Update'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UpdateUser from './pages/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
            <Routes>
              <Route Component={HomePage} path='/' exact></Route>
              <Route Component={Table} path='/table' exact></Route>
              <Route Component={UpdateUser} path='/edit/:id' exact></Route>
              {/* <Route Component={Cart} path='/Cart' exact></Route>
              <Route Component={Products} path='/Products' exact></Route> */}
            </Routes>
          </Router>
    </>
  )
}

export default App
