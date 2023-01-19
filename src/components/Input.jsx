import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import { Deposit } from "../constants";

const Input = () => {
  const metadata = ["QmUoqRwd323BczuyyHcFdnzab41m887Evx6PDRGEdiu5yy "];
  const [tony, setTony] = useState("");
  const [tony2, setTony2] = useState("");
  const [error, seterror] = useState("");
  const [success, setSucess] = useState("");

  const handleChangeInput = (event) => {
    setTony(event.target.value);
  };

  const handleChange = (event) => {
    setTony2(event.target.value);
  };

  const handleClick = async () => {
    try {
      const amount = ethers.utils.parseEther(tony);
      const tx = await Deposit(metadata[0], tony2, amount);
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

  return (
    <div className="flex flex-col justify-center items-center my-3 bg-[#141827] px-2 py-3">
      <div className="flex flex-col justify-center items-center rounded-2xl bg-[#1d243a] py-8 px-4">
        <div className=" flex flex-row px-2 justify-center items-center">
          <span className="px-2 font-bold">Enter Amount</span>
          <input
            placeholder="Enter amount to Donate"
            type={"number"}
            value={tony}
            onChange={handleChangeInput}
            className="appearance-none	bg-[#16192b] h-12 rounded-2xl px-2 py-2 border-none border-[#16192b] outline-none w-[300px] pl-10 "
          />
        </div>

        <div className=" flex flex-row px-2 mt-4 justify-center items-center">
          <span className="px-2 font-bold">Donor's Name</span>
          <input
            placeholder="Your Name Please"
            type={"text"}
            value={tony2}
            onChange={handleChange}
            className="appearance-none	bg-[#16192b] h-12 rounded-2xl px-2 py-2 border-none border-[#16192b] outline-none w-[300px] pl-10 "
          />
        </div>

        <button className="my-4 bg-[#7048e8]" onClick={handleClick}>
          Proceed
        </button>
        <div className="text-green-500 font-extrabold">{success}</div>
        <div className="text-red-500 font-extrabold">{error}</div>
      </div>
    </div>
  );
};

export default Input;
