import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import DefaultLayout from "./components/pages/DefaultLayout";
import MainContent from "./components/pages/MainContent";
import HomePage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs";
import PostList from "./components/pages/PostList";




function App() {


  return (
    <BrowserRouter>
      <Route Component={DefaultLayout}>

        <Route path="/" Component={MainContent} />
        <Route path="/HomePage" Component={HomePage} />
        <Route path="/AboutUs" Component={AboutUs} />
        <Route path="/AboutUs" Component={PostList} />

      </Route>
    </BrowserRouter >

  )
}

export default App
