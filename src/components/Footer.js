import React from "react";

function footer() {
  return (
    <div className="lg:px-[73px] px-4 mt-[40px] py-[73px]  flex justify-between flex-col  text-yellow bg-black">
        <div className="flex  justify-between lg:flex-row flex-col gap-y-16">
      <div className="flex flex-col">
        <img className="w-[180px]" src="./ethLagosLogo2.png" />
        <div className="flex mt-6">
          <p className="pr-4">Organized by </p>
          <img src="./sponsorsIcon/ethereumNigeria.png" />
        </div>
        <div className="flex mt-14 gap-x-5">
          <img src="./socialicons/twitter.png" />
          <img src="./socialicons/telegram.png" />
          <img src="./socialicons/youtube.png" />
          <img src="./socialicons/linkedin.png" />
          <img src="./socialicons/meduim.png" />
          <img src="./socialicons/whatsapp.png" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-3">
        <p className="font-bold">Explore</p>
        <p> About ETHLagos</p>
        <p>Speaker</p>
        <p>Schedules</p>
        <p>Community</p>
      </div>
      <div className=" flex flex-col gap-y-3">
        <p className="font-bold">Website</p>
        <p>Ethereum Nigeria</p>
        <p>ETHGlobal</p>
        <p>Ethereum Foundation</p>
      </div>
      <div className=" flex flex-col gap-y-3">
        <p className="font-bold">Socials</p>
        <div>
          <p>x(twitter)</p>
          <p>@EthereumNigeria</p>
        </div>

        <div>
          <p>Telegram</p>
          <p>@EthereumNigeria</p>
        </div>

        <div>
          <p>WhatasApp</p>
          <p>@EthereumNigeria</p>
        </div>

        <div>
          <p>Youtube</p>
          <p>@EthereumNigeria</p>
        </div>

        <div>
          <p>Meduim</p>
          <p>@EthereumNigeria</p>
        </div>
        <div>
        <p>LinkedIN</p>
        <p>@EthereumNigeria</p>
      </div>
      </div>
</div>
     <p className="lg:self-center mt-[50px]">Copyright 2024 ETHLagos, All rights reserved.</p>
    </div>
  );
}

export default footer;
