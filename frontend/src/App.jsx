import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import NewsContent from './Components/NewsContent';
import Register from './Components/register';
import Login from './Components/login';
import Dashboard from './Components/Dashboard';
import CreatePost from './Components/CreatePost';
import Update from './Components/Update';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<NewsContent/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/post" element={<CreatePost/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
