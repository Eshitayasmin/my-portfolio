import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navItems = <>
  <li><a href="home#about">About</a></li>
  <li><a href="home#projects">Projects</a></li>
  <li><a href="home#contact">Contact</a></li>
  <li><Link to="/blogs">Blogs</Link></li>
  </>
    
    return (
      <div class="navbar fixed flex justify-between lg:justify-around bg-red-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
           {navItems}
          </ul>
        </div>
        <a onClick={() => navigate('/home')} class="btn btn-ghost normal-case text-2xl text-purple-600">Eshita's Portfolio</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {navItems}
        </ul>
      </div>
 
    </div>
    );
};

export default Navbar;