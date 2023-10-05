import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import chart from "../images/chart.png";
import game from "../images/game.png";
import workers from "../images/workers.png";
import repports from "../images/repports.png";
import logo from "../images/logo.png";

const SideBar = () => {
  const [selected, setSelected] = useState(null);

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const sideInfo = [
    { info_name: "Stats", imgUrl: chart, alt: "1", path: "" },
    { info_name: "Games", imgUrl: game, alt: "2", path: "games" },
    { info_name: "Workers", imgUrl: workers, alt: "3", path: "workers" },
    { info_name: "Repports", imgUrl: repports, alt: "4", path: "" },
  ];

  const setSelection = (name) => {
    setSelected(name);
  };

  return (
    <div className="sidebar_bg  w-[17%] h-screen flex flex-col">
      <div className="flex flex-row w-full h-10 mt-4 items-center gap-3 ">
        <img className="w-9 h-9 pb-1 pl-2" src={logo} alt="logo" />
        <h1 className="text-2xl font-bold logo_name font-satoshi">GameLog</h1>
      </div>
      <div className="mt-[30%]">
        {sideInfo.map((info) => (
          <Link
            to={`/${info.path}`}
            key={info.alt}
            className={`${
              selected === info.info_name
                ? "bg-zinc-700"
                : "hover:bg-teal-900"
            } flex gap-5 px-4 my-8 ml-4 py-3 w-[85%] rounded-lg`}
            onClick={() => setSelection(info.info_name)}
          >
            <img className="w-6 h-6" src={info.imgUrl} alt={info.alt} />
            <h1 className="logo_name text-md font-semibold font-satoshi ">
              {info.info_name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
