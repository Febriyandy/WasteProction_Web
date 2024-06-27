import React from "react";
import Navbar1 from "../components/Navbar1";
import Carousel from "../components/Courosel";
import pettern1 from "../assets/pettern1.png";
import pettern2 from "../assets/pettern2.png";
import pettern5 from "../assets/pettern5.png";
import pettern6 from "../assets/pettern6.png";
import { LuWallet2 } from "react-icons/lu";
import { FaCoins } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar1 />
      <section className="w-2/3 mx-auto pt-24">
        <Carousel />
      </section>
      <section className="w-full h-screen bg-lightest mt-10 relative">
        <img src={pettern1} className="absolute bottom-0 w-56" alt="" />
        <img src={pettern2} className="float-right w-56" alt="" />
        <h1 className="font-body text-dark1 text-2xl pt-10 pl-24">
          Halo <b>Febriandi</b>{" "}
        </h1>
        <div className="flex w-full">
        <div className="w-1/2 flex flex-col -mt-28">
          <div className="w-2/5 h-36 flex mx-auto my-auto p-5 bg-white rounded-md shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center bg-secound rounded-md">
              <p className="text-4xl text-white">
                <LuWallet2 />
              </p>
            </div>
            <div>
              <h1 className="font-body text-lg text-dark1 pl-3">
                Total Tagihan
              </h1>
              <h1 className="font-body text-2xl font-bold text-dark1 pl-3">
                Rp 56.000
              </h1>
              <Link className="py-1 px-3 mt-3 -mr-8 float-right rounded-md text-dark1 font-body hover:bg-secound hover:text-white border-2  border-secound">
                Lihat Rincian
              </Link>
            </div>
          </div>
          <div className="w-2/5 h-36 mt-10 flex mx-auto p-5 bg-white rounded-md shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center bg-secound rounded-md">
              <p className="text-3xl text-white">
                <FaCoins />
              </p>
            </div>
            <div>
              <h1 className="font-body text-lg text-dark1 pl-3">
                Koin Bank Sampah
              </h1>
              <h1 className="font-body text-2xl font-bold text-dark1 pl-3">
                7.500
              </h1>
              <Link className="py-1 px-3 mt-3  float-right rounded-md text-dark1 font-body hover:bg-secound hover:text-white border-2  border-secound">
                Lihat Rincian
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 pr-24 -mt-28">
          <div className="w-2/3 h-28 bg-white rounded-md shadow-lg">

          </div>
          <div className="w-2/3 h-28 bg-white rounded-md shadow-lg">

          </div>
        </div>
        </div>
        
      </section>
      <Footer/>
    </>
  );
};

export default Home;
