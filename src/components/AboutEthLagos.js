import React from "react";

function AboutEthLagos() {
  return (
    <div className="">
      <img
        className="w-full"
        src="./illustrations/bridge-removebg-preview.png"
      />
      <div className="lg:pl-[73px]  pl-4 bg-black text-yellow flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2">
        <div className="flex flex-col justify-between py-[73px]">
          <p className="font-bold">About</p>
          <p className="text-[48px] font-bold">ETH Lagos</p>
          <p className="italic">
            ETH Lagos is an outstretch of the Ethereum Global Conference to the
            City of Lagos Nigeria, it brings together professionals and
            Enthusiast in the blockchain space from all over Lagos and the
            country at large. ETH Lagos provides opportunities for growth,
            networking and educates participants on the upgrades and updates on
            the Ethereum blockchain.
          </p>
          <p className="cursor-pointer bg-yellow text-black rounded px-[48px] py-[18px] w-48 mt-[64px] text-center">
            Register Now
          </p>
        </div>
        <img
          className="w-[400px] lg:w-[500px] self-end end"
          src="./illustrations/bus.png"
        />
      </div>
    </div>
  );
}

export default AboutEthLagos;
