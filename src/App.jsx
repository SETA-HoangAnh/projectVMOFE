import DashBoard from "./components/dashboard/DashBoard.jsx";
import AuthLayout from "./components/layout/AuthLayout.jsx";
import '../src/assets/css/Tesst.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
      <div>
        <BrowserRouter>
          <AuthLayout></AuthLayout>
          </BrowserRouter>  
      </div>
  )
}

export default App
