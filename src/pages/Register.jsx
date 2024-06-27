import React from 'react'
import logo from '../assets/logo.png';
import foto1 from '../assets/login-img1.png';
import pettern1 from '../assets/pettern1.png';
import pettern2 from '../assets/pettern2.png';
import pettern5 from '../assets/pettern5.png';
import pettern6 from '../assets/pettern6.png';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  return (
    <>
    <section className='w-full h-screen flex'>
    <div className='w-1/2 p-10'>
    <img className='animate__animated animate__fadeInLeft animate__delay-700ms w-56 h-auto' src={logo} alt="logo" />
    <img className='h-96 w-auto mx-auto mt-10' src={foto1} alt="foto1" />
    </div>
    <div className=' w-1/2 bg-lightest'>
       <img src={pettern1} className='animate__animated animate__fadeInLeft animate__delay-700ms w-40 bottom-0 absolute' alt="" />
       <img src={pettern2} className='animate__animated animate__fadeInDown animate__delay-700ms w-40 float-end' alt="" />
       <img src={pettern5} className='animate__animated animate__fadeInDown animate__delay-700ms w-24 ' alt="" />
       <img src={pettern6} className='animate__animated animate__fadeIn animate__delay-800ms w-24 bottom-0 right-0 absolute' alt="" />
        <div className='w-1/4 h-2/3  absolute  top-1/2 transform translate-x-1/2 -translate-y-1/2'>
            <h1 className='font-body font-bold text-2xl text-secound'>Pendaftaran</h1>
            <p className='font-body text-base text-dark1'>Mohon isi data berikut dengan benar.</p>
            <form action="">
            <input className='w-full bg-transparent text-primary focus:border-secound mt-5 outline-none border-b font-body border-primary' type="text" placeholder="Nama Lengkap" />
                <input className='w-full bg-transparent text-primary focus:border-secound mt-5 outline-none border-b font-body border-primary' type="email" placeholder="Alamat Email" />
                <input className='w-full bg-transparent focus:border-secound mt-5 outline-none border-b font-body border-primary' type="password" placeholder="Password" />
                <input className='w-full bg-transparent  mb-3 focus:border-secound mt-5 outline-none border-b font-body border-primary' type="password" placeholder="Konfirmasi Password" />
                <Link className='font-body text-dark1 float-right hover:text-primary2'>Lupa Password?</Link>
                <button className='mt-6 px-36 font-bold py-2 rounded-md hover:bg-secound hover:text-white text-dark1 shadow-md bg-white font-body text-primary'>Daftar</button>
            </form>
            <p className='font-body text-dark1 text-center py-3'>Atau</p>
            <div className='flex justify-between'>
                <Link className='flex font-body text-xs py-2 bg-white px-2 rounded-md items-center text-dark1 shadow-md gap-1 hover:text-white hover:bg-secound'> <FcGoogle/>Masuk dengan Google</Link>
                <Link className='flex font-body text-xs py-2 bg-white px-2 rounded-md items-center text-dark1 shadow-md gap-1 hover:text-white hover:bg-secound'> <FaFacebook/> Masuk dengan Facebook</Link>
            </div>
            <p className='font-body mt-5 text-dark1'>Belum punya akun?  <Link to='/Login' className='hover:text-primary2'>Daftar Sekarang</Link></p>
        </div>
    </div>
   
    </section>
    </>
  )
}

export default Register