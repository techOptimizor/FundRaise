import { info } from "autoprefixer";
import React from "react";
import { images } from "../assets";
import { Input } from "../components";
import { getDonorAmount } from "../constants";
import { useAccount } from "wagmi";
import { formatEther } from "ethers/lib/utils.js";
import { useState, useEffect } from "react";

const Home = () => {
  const { address, isConnected } = useAccount();
  const [donations, setdonations] = useState(null);

  function shortenAddress(add) {
    if (isConnected) {
      return `${add.slice(0, 6)}...${add.slice(-4)}`;
    } else {
      return "Connect Wallet";
    }
  }

  const Donated = async () => {
    const amount = await getDonorAmount(address);
    setdonations(formatEther(amount));
  };

  useEffect(() => {
    if (isConnected) {
      Donated();
    }
  }, [isConnected]);

  return (
    <div>
      <div className="flex bg-[#141827] py-3 px-3 w-full ">
        <div className=" flex flex-wrap flex-col ">
          <h1 className="font-serif text-[#e5f4fb] py-1 my-2">Mini Dapp</h1>
          <p className="font-semibold mb-6">
            A mini fund contirbution dapp to help the peoples goals and those in
            need of help
          </p>

          <div className="bg-[#1e133e] flex flex-col h-[200px] rounded-2xl px-3  ">
            <p className="text-[#7048e8]-500 font-extrabold mb-3">Donations</p>
            <div className=" flex flex-row rounded-3xl bg-[#342ec5] px-3 py-3  justify-between">
              <p className="font-bold  px-2 py-2">{shortenAddress(address)} </p>
              <div className="flex flex-row">
                <p className="font-bold  px-2 py-2">Donated :</p>
                <p className="font-semibold mr-2 rounded-3xl px-2 py-2 bg-[#141827]">
                  {donations} ETH
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <img
            src={images.fund}
            alt="fund_logo"
            className="sm:w-[500px] sm:h-[150px] md:w-[500px] md:h-[250px] lg:h-[400px] rounded-full w-[300px] h-[150px]"
          />
        </div>
      </div>
      <Input />
    </div>
  );
};

export default Home;
