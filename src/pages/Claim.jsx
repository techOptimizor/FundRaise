import React from "react";
import { images } from "../assets";
import { useState, useEffect } from "react";
import { claim, balanceOf } from "../constants";
import { useAccount } from "wagmi";
const Claim = () => {
  const { isConnected, address } = useAccount();
  const [Value, setValue] = useState("");
  const [error, seterror] = useState("");
  const [success, setSucess] = useState("");
  const [showNFT, setShow] = useState("hidden");
  const [showtext, settext] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = async () => {
    try {
      const tx = await claim(Value);
      if (tx) {
        setSucess("TRANSACTION SUCESSFUL ✅");
        setTimeout(() => {
          setSucess("");
        }, 8000);
      }
    } catch (error) {
      seterror("ERROR: TRANSACTION FAILED 🚫");
      setTimeout(() => {
        seterror("");
      }, 8000);
    }
  };

  const balance = async () => {
    const balance = await balanceOf(address);
    if (balance >= 1) {
      setShow("");
      settext("hidden");
    }
  };

  useEffect(() => {
    if (isConnected) {
      balance();
    }
  }, [isConnected]);

  return (
    <div>
      <div className="flex bg-[#141827] py-3 px-3 w-full ">
        <div className=" flex flex-wrap flex-col ">
          <h1 className="font-serif text-[#e5f4fb] py-1 my-2">Mini Dapp</h1>
          <p className="font-semibold">
            A mini fund contirbution dapp to help the peoples goals and those in
            need of help
          </p>
          <div className=" flex px-2 py-3 bg-[#1e133e] justify-center items-center w-[400px] rounded-3xl flex-col">
            <p className="text-[#7048e8]-500 font-extrabold">YOUR NFT</p>
            <h2 className={`${showtext} font-bold `}>
              {" "}
              Sorry , you do not owe any Active NFT .Please Donate
            </h2>
            <img
              src={images.nft}
              alt="fund_logo"
              className={` ${showNFT} sm:w-[300px] sm:h-[150px] md:w-[300px] md:h-[250px] lg:h-[400px] rounded-[1.5rem]  w-[150px] h-[150px] `}
            />
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

      <div className="flex flex-col justify-center items-center rounded-2xl bg-[#1d243a] py-8 px-4">
        <div className=" flex flex-row px-2 justify-center items-center">
          <span className="px-2 font-bold">NFT ID</span>
          <input
            placeholder="Enter your NFT ID "
            type={"tell"}
            value={Value}
            onChange={handleChange}
            className="appearance-none	bg-[#16192b] h-12 rounded-2xl px-2 py-2 border-none border-[#16192b] outline-none w-[300px] pl-10 "
          />
        </div>

        <button className="my-4 bg-[#7048e8]" onClick={handleClick}>
          Claim Token
        </button>
        <div className="text-green-500 font-extrabold">{success}</div>
        <div className="text-red-500 font-extrabold">{error}</div>
      </div>
    </div>
  );
};

export default Claim;
