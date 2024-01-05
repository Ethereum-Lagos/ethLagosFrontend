import React from "react";

function Header() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
  };

  return (
    <header className="lg:mx-[73px] mx-4 mt-[40px] bg-white text-black flex flex-row justify-between gap-x-5 items-center">
      <div className="w-[137px]">
        <img src="./ethLagosLogo.png" />
      </div>
      <div>
        <ul className=" hidden  lg:flex flex-row gap-x-5 items-center">
          <li className="cursor-pointer font-bold">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Speaker</li>
          <li className="cursor-pointer">Schedules</li>
          <li className="cursor-pointer">Partners</li>
          <li className="cursor-pointer">Community</li>
          <li className="cursor-pointer">FAQ</li>
          <p className="cursor-pointer bg-black text-yellow rounded px-[48px] py-[18px]">
            Register Now
          </p>
        </ul>

        <img  
       onClick={() => openNav()}
      src="./images/icons/icons8-hamburger.svg"
            className="text-black w-6  cursor-pointer lg:hidden block my-auto"
            alt=""
          />
      </div>

      <div id="mySidenav" className="sidenav  ">
        <div className="w-[90%] mx-auto gap-y-4 ">
          <p
            onClick={() => closeNav()}
            className="float-right text-4xl cursor-pointer"
          >
            &times;
          </p>
          <div className="pt-20 flex "></div>
          <li className="cursor-pointer font-bold">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Speaker</li>
          <li className="cursor-pointer">Schedules</li>
          <li className="cursor-pointer">Partners</li>
          <li className="cursor-pointer">Community</li>
          <li className="cursor-pointer">FAQ</li>
          <p className="cursor-pointer bg-black text-yellow rounded px-[48px] py-[18px] self-center w-56">
            Register Now
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;