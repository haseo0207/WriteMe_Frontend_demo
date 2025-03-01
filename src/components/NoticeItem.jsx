import React from 'react'
import { useNavigate } from "react-router-dom";
import "./NoticeItem.css"
import { CgProfile } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa6";

const NoticeItem = ({ contentId, title, name, view, time}) => {
  const nav = useNavigate();

  const goViewPage = () => {
    nav(`view/${contentId}`);
  };

  return (
    <div>
      <li className="notice-item" onClick={goViewPage}>
        <div className="info-l">
          <span className="listname">
            {title}
          </span>
          <span className="listtime">
            {time}
          </span>

        </div>
        <div className="info-r">
          <span className='listwirte'>
            <CgProfile className="profileicon" />
            {name}
          </span>
          <span className='listview'>
            <FaRegEye className="viewicon" />
            {view}
          </span>
        </div>
      </li>
    </div>
  )
}

export default NoticeItem