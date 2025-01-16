import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import HeaderContent from "./components/HeaderContent";
import MainContent from "./components/MainContent";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainContent} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
