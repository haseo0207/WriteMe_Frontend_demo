import React from 'react'
import { useNavigate } from "react-router-dom";
// import "./NoticeItem.css"
import { CgProfile } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa6";

const NoticeItem = ({ contentId, title, name, view, time }) => {
  const nav = useNavigate();

  const goViewPage = () => {
    nav(`view/${contentId}`);
  };

  return (
    <div>
      <li
        className="notice-item bg-white border border-gray-200 p-[10px_20px] flex justify-between items-center transition-all duration-300 cursor-pointer hover:bg-gray-50 overflow-hidden"
        onClick={goViewPage}
      >
        <div className="info-l flex justify-between items-center w-[80%] min-w-0">
          <span className="listname text-base leading-6 truncate">
            {title}
          </span>
          <span className="listtime text-base leading-6 mr-10 shrink-0">
            {time}
          </span>
        </div>
        <div className="info-r flex items-center justify-between w-[18%] shrink-0">
          <span className="listwirte flex items-center text-base leading-6">
            <CgProfile className="profileicon w-[50px] h-[50px] text-black mr-[10px]" />
            {name}
          </span>
          <span className="listview flex items-center text-base leading-6 w-[60px] justify-start">
            <FaRegEye className="viewicon text-black mr-[5px]" />
            {view}
          </span>
        </div>
      </li>
    </div>
  )
}

export default NoticeItem