import React from "react";
//import styles from "./styles";
import { Home, Claim } from "./pages";
import { Sidebar, Input } from "./components";
import { Route, Routes, Link } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { images } from "./assets";
import { useState, useEffect } from "react";
import { create } from "./constants";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";


//import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { chain } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";

const Icon = ({ styles, name, imgUrl, isActive, disabled }) => (
  <div
    className={`w-[60px] h-[40px] rounded-[10px] my-4 ${
      isActive && isActive === name && `bg-[#e3e4e7]`
    } flex justify-center items-center ${
      !disabled && `cursor-pointer`
    } ${styles} `}
  >
    <div className="flex justify-center items-center w-[100px] h-[40px] flex-row">
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-5 h-5" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-5 h-5" ${isActive !== name && "grayscale"}`}
        />
      )}
    </div>
  </div>
);

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [fundtoken, setfundtoken] = useState(null);
  const { isConnected } = useAccount();

  return (
    <div className="relative sm:-8 font-family: Inter, Avenir, Helvetica, Arial, sans-serif bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-3 relative">
        <Sidebar />
      </div>
      <div
        onClick={() => setToggle(true)}
        className={`sm:hidden flex py-2 px-2 my-3 mx-3 bg-[#5f3dc4] h-10 rounded-full ${
          toggle && "hidden"
        } `}
      >
        <img src={images.menu} alt="sidebar" className={`w-6 h-6 `} />
      </div>
      {toggle && (
        <div className=" sm:hidden  mr-3">
          <div className="flex justify-start items-center sticky top-0 h-[100vh] flex-col bg-[#141827] ">
            <img
              src={images.icons}
              alt="close"
              className="w-5 h-5 flex ml-[50px] cursor-pointer "
              onClick={() => setToggle(false)}
            />
            <h1 className="text-[#5f3dc4]">B</h1>

            <ConnectButton/>

            <div className="flex flex-col">
              <Link to="/">
                <Icon styles="bg-[#16192b] " imgUrl={images.dashboard} />
              </Link>

              <Link to={"/claim"}>
                <Icon imgUrl={images.dashboard} styles="bg-[#16192b] " />
              </Link>
            </div>
          </div>
        </div>
      )}
      {!isConnected ? (
        <div className="flex my-10 mx-10 bg-slate-800 px-5 py-5 h-[300px] justify-center items-center rounded-3xl w-full">
          <h1 className="text-white">Connect Wallet</h1>{" "}
        </div>
      ) : (
        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 text-blue-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/claim" element={<Claim />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import { Sidebar } from "./components";
// import { Home } from "./pages";

// const App = () => {
//   return (
//     <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
//       <div className="sm:flex hidden mr-10 relative">
//         <Sidebar />
//       </div>

//       <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
//         {/* <Navbar /> */}

//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/profile" element={<Profile />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/campaign-details/:id" element={<CampaignDetails />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;
