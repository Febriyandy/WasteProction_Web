import React from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Navbar1 = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/Home', label: 'Beranda' },
    { path: '/Layanan', label: 'Layanan' },
    { path: '/Artikel', label: 'Artikel' },
    { path: '/Bantuan', label: 'Bantuan' },
  ];
  return (
    <>
    <nav className='animate__animated animate__fadeInDown w-full flex justify-between h-16 shadow-lg fixed z-[1000] bg-white'>
      <div className='flex p-2 items-center'>
        <img src={logo} className='w-36 ml-10' alt="logo" />
      </div>
      <div className='flex gap-10 items-center mr-10'>
      {navigationItems.map((navItem, index) => (
            <Link to={navItem.path} key={index} className={`font-body ${location.pathname === navItem.path ? 'text-primary2' : 'text-dark1'} hover:text-secound`}>
              {navItem.label}
            </Link>
          ))}
        <Link className=' font-body text-dark1 text-2xl hover:text-primary2'>
          <IoMdNotifications/>
        </Link>
        <Link className=' font-body text-dark1 text-4xl hover:text-primary2'>
          <FaUserCircle/>
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar1