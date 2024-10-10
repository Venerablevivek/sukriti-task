import './App.css'
import Homepage from './components/Homepage'
import {Routes, Route} from "react-router-dom";
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className=' w-[100vw] h-[100vh] bg-white ' >
       <Routes>
       <Route path="/" element={
            <Homepage />
           }/>
        <Route path="/login" element={
            <Homepage />
           }/>
        <Route path="/register" element={
            <Register />
           }/>
           <Route path="/dashboard" element={
            <Dashboard />
           }/>
       </Routes>
    </div>
  )
}

export default App
