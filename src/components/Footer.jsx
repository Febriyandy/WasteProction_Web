import React from 'react'
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png';
import { PiTiktokLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";


export const Footer = () => {
  return (
    <>
    <footer className=' h-80 justify-center w-full bg-white relative bottom-0'>
        <img className='w-44 mt-5 ml-10' src={logo} alt="" />
        <div className='flex justify-between mt-5'>
          <table>
            <tbody>
            <tr>
              <td className='pl-16 pb-5'>
                <div className='w-10 h-10 text-white justify-center items-center flex text-xl bg-secound rounded-full'>
                  <FaLocationDot/>
                </div>
              </td>
              <td className='w-96 pb-5 pl-10 font-body text-dark1'>
               <b> Alamat</b> <br />Jl. Nglengkong Besi No.15, Area Sawah, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
              </td>
            </tr>
            <tr>
            <td className='pl-16 pb-5'>
                <div className='w-10 h-10 text-white justify-center items-center flex text-xl bg-secound rounded-full'>
                  <BsFillTelephoneFill/>
                </div>
              </td>
              <td className='w-96 pb-5 pl-10 font-body text-dark1'>
               <b>Telepon</b> <br /> +62 812 9501 2659
              </td>
            </tr>
            <tr>
            <td className='pl-16 pb-10'>
                <div className='w-10 h-10 text-white justify-center items-center flex text-2xl bg-secound rounded-full'>
                  <IoIosMail />
                </div>
              </td>
              <td className='w-96 pb-10 pl-10 font-body text-dark1'>
               <b>Email</b> <br /> wasteproction@gmail.com
              </td>
            </tr>
            </tbody>
          </table>
          <p className='font-body text-dark1 leading-loose'><b>Tautan</b> <br />Syarat dan Ketentuan <br />Kemitraan Perusahaan <br />Hubungi Kami</p>
          <div className='mr-32 font-body text-dark1'>
            <p className='font-bold'>Ikuti Kami di :</p>
            <table>
              <tbody>
              <tr>
                <td className='text-2xl hover:text-secound pr-3 pt-3'><a href=""><FaInstagram/></a></td>
                <td className='pt-3'>wasteproction_</td>
              </tr>
              <tr>
                <td className='text-2xl hover:text-secound pr-3 pt-3'><a href=""><FiFacebook/></a></td>
                <td className='pt-3'>Waste Proction</td>
              </tr>
              <tr>
                <td className='text-2xl hover:text-secound pr-3 pt-3'><a href=""><PiTiktokLogo/></a></td>
                <td className='pt-3'>wasteproction</td>
              </tr>
              <tr>
                <td className='text-2xl hover:text-secound pr-3 pt-3'><a href=""><RiTwitterXFill/></a></td>
                <td className='pt-3'>WasteProction</td>
              </tr>
              </tbody>
            </table>
           
          </div>
        </div>
        <div className='w-full flex h-16 items-center  pl-16 bg-secound'>
        <p className=' font-body text-white absolute '>© 2023 Waste Proction. All Rights Reserved</p>
        </div>
    </footer>
    </>
    
  )
}
