import React from "react";
import './style.css'
// import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
const Logout = ()=>{
  localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate('/register')
}
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-slate-200 navbar-white h-[4rem] shadow-lg">
        <a className="navbar-brand" href="/">
          <span className="ggg">News</span>
        </a>

        <a href="/dashboard">
          <span className="fff">Dashboard</span>
        </a>
        <a href="/register">
          <span className="fff">register</span>
        </a>
        <a href="/login">
          <span className="fff">Login</span>
        </a>
          <button className="fff" onClick={Logout}>logout</button>
      </nav>
    </div>
  );
};

export default Navbar;
