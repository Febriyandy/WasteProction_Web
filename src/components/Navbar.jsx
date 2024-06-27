import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className=' animate__animated animate__fadeInDown  w-full flex justify-between h-16 shadow-lg fixed z-[1000] bg-white'>
      <div className='flex p-2 items-center'>
        <img src={logo} className='w-36 ml-10' alt="logo" />
      </div>
      <div className='flex gap-10 items-center mr-20'>
        <Link to='' className='font-body text-dark1 text-lg hover:text-primary2'>
          Beranda
        </Link>
        <Link to='' className='font-body text-dark1  text-lg hover:text-primary2'>
          Tentang Kami
        </Link>
        <Link className='font-body text-dark1  text-lg hover:text-primary2'>
          Kontak
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar