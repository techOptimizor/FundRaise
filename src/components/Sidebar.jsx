import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../assets";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[200px] h-[40px] rounded-[10px] my-4 ${
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
      <p className="px-1">{name}</p>
    </div>
  </div>
);

const Sidebar = ({ disabled }) => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState("dashboard");
  return (
    <div className="flex justify-start items-center sticky top-0 h-[100vh] flex-col bg-[#141827] ">
      <h1 className="bg-[#141827] text-white font-sans rounded-xl font-semibold text-2xl px-8 py-2">
        Bunzz Beta
      </h1>

      <div className=" flex flex-col py-3 rounded-xl my-1 justify-center items-center bg-[#141827]">
        <ConnectButton
          label="Wallet Sign  In"
          accountStatus={"avatar"}
          chainStatus="icon"
          showBalance={false}
        />

        <Link to="/">
          <Icon
            styles="bg-[#16192b] "
            imgUrl={images.dashboard}
            name={"dashboard"}
          />
        </Link>

        <Link to={"/claim"}>
          <Icon
            imgUrl={images.dashboard}
            name={"Rewards"}
            styles="bg-[#16192b] "
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// //import { logo, sun } from "../assets";
// //import { navlinks } from "../constants";

// const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
//   <div
//     className={`w-[48px] h-[48px] rounded-[10px] ${
//       isActive && isActive === name && "bg-[#2c2f32]"
//     } flex justify-center items-center ${
//       !disabled && "cursor-pointer"
//     } ${styles}`}
//     onClick={handleClick}
//   >
//     {!isActive ? (
//       <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
//     ) : (
//       <img
//         src={imgUrl}
//         alt="fund_logo"
//         className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
//       />
//     )}
//   </div>
// );

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [isActive, setIsActive] = useState("dashboard");

//   return (
//     <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
//       <Link to="/">
//         ''
//         <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={"logo"} />
//       </Link>

//       <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
//         {/* <div className="flex flex-col justify-center items-center gap-3">
//           {navlinks.map((link) => (
//             <Icon
//               key={link.name}
//               {...link}
//               isActive={isActive}
//               handleClick={() => {
//                 if (!link.disabled) {
//                   setIsActive(link.name);
//                   navigate(link.link);
//                 }
//               }}
//             />
//           ))}
//         </div> */}

//         <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={"sun"} />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
