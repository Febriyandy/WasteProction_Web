import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import foto1 from "../assets/wp.png";
import foto2 from "../assets/duniabersih.png";
import foto3 from "../assets/duniabersih1.png";
import { FaWallet } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Footer } from "../components/Footer";


const Landingpage = () => {
  return (
    <>
      <Navbar />
      <section id="beranda" className="w-full h-screen flex">
        <div className=" my-auto ml-24">
          <h1 className="animate__animated animate__fadeInUp animate__delay-200ms font-body font-extrabold leading-snug text-secound text-5xl">
            SELAMAT DATANG DI <br /> WASTE PROCTION
          </h1>
          <p className="animate__animated animate__fadeInUp animate__delay-400ms w-2/3 font-body text-dark1 text-lg">
            Solusi pengelolaan sampah masak kini yang berkelanjutan untuk
            lingkungan yang lebih hijau
          </p>
          <div className="animate__animated animate__fadeInUp animate__delay-600ms flex gap-7">
            <Link to='/Register' className="py-2 px-4 mt-5 text-base rounded-md font-body text-white hover:bg-dark1 bg-primary1 ">
              Daftar Sekarang
            </Link>
            <Link to='/Login' className="py-2 px-6 mt-5 rounded-md text-base font-body text-secound hover:bg-secound hover:text-white border-2 border-secound ">
              Masuk
            </Link>
          </div>
        </div>
        <div className=" animate__animated animate__fadeInRight animate__delay-700ms my-auto mr-20">
          <img src={foto1} alt="" />
        </div>
      </section>
      <section id="about" className="w-full h-screen pt-24 bg-lightest">
        <h1 data-aos="fade-up" className="font-body text-4xl font-bold text-center text-secound">APA ITU WASTE PROCTION?</h1>
        <div className="flex mt-10">
          <div className="w-1/2">
            <img data-aos="fade-up" src={foto2} alt="foto2" className="mx-auto" />
          </div>
          <div className="w-1/2 my-auto">
            <p data-aos="fade-up" className="w-3/4 font-body text-base text-dark1 mx-auto ">
              Waste Proction adalah sebuah website yang menyediakan layanan
              pengelolaan sampah yang efisien dan efektif. Kami di Waste
              Proction berkomitmen untuk membantu Anda dalam pengelolaan sampah
              yang efisien, ramah lingkungan, dan berkelanjutan. Sebagai
              penghubung anda dengan mitra pengelola sampah dalam menjaga
              kebersihan dan menjalankan praktik yang mendukung lingkungan, kami
              menawarkan layanan pengambilan sampah yang l dan beragam solusi
              pengelolaan sampah.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-screen pt-36">
        <h1 data-aos="fade-right" className="font-body text-4xl font-bold text-secound ml-16">Fitur</h1>
        <div  className="flex gap-10 justify-center mt-16">
            <div data-aos="fade-up" data-aos-delay="200" className="w-96 h-44 flex shadow-md rounded-xl">
              <div className="text-4xl text-secound pl-5 pt-5">
                <FaCalendarAlt/>
              </div>
              <div className="p-5">
                <h1 className="font-body text-xl font-bold text-secound">Jadwal Pengangkutan Fleksibel</h1>
                <p className="font-body mt-3 text-dark1">Anda dapat menentukan jadwal pengangkutan sampah yang Anda miliki.</p>
              </div>
            </div>
            <div  data-aos="fade-up" data-aos-delay="400" className="w-96 h-44 flex shadow-md rounded-xl">
              <div className="text-4xl text-secound pl-5 pt-5">
                <FaWallet/>
              </div>
              <div className="p-5">
                <h1 className="font-body text-xl font-bold text-secound">Biaya Ekonomis</h1>
                <p className="font-body mt-3 text-dark1">Kami menawarkan biaya pengangkutan sampah yang ekonomis di kantong Anda.</p>
              </div>
            </div>
            <div  data-aos="fade-up" data-aos-delay="600" className="w-96 h-44 flex shadow-md rounded-xl">
              <div className="text-4xl text-secound pl-5 pt-5">
                <MdDelete/>
              </div>
              <div className="p-5">
                <h1 className="font-body text-xl font-bold text-secound">Bank Sampah</h1>
                <p className="font-body mt-3 text-dark1">Anda dapat memilah sampah yang dapat didaur ulang dan dapatkan koin yang bisa digunakan untuk membayar ongkos angkut.</p>
              </div>
            </div>
        </div>
      </section>
      <section  className="w-full h-screen flex pt-24 bg-lightest">
        <div className="w-1/2">
        <img data-aos="fade-up" src={foto3} alt="" className="mx-auto mt-10" />
        </div>
        <div className="w-1/2 pl-20 mt-24">
          <h1 data-aos="fade-up" className="text-3xl font-body text-dark1 font-bold"> Perusahaan anda bergerak di bidang pengelolaan sampah? </h1>
          <p data-aos="fade-up" className="text-3xl font-body text-secound mt-5 font-bold">Mari Bergabung bersama kami</p>
          <div className="flex gap-7">
            <Link data-aos="fade-up" className="py-2 px-4 mt-5 text-base rounded-md font-body text-white hover:bg-dark1 bg-primary1 ">
              Daftar Sebagai Mitra
            </Link>
            <Link data-aos="fade-up" className="py-2 px-6 mt-5 rounded-md text-base font-body text-secound hover:bg-secound hover:text-white border-2 border-secound ">
              Masuk
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Landingpage;
