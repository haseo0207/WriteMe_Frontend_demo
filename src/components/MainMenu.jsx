import React from 'react'
import "./MainMenu.css"
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const nav = useNavigate();
  return (
    <>
      <ul className='main-menu'>
        <li onClick={() => nav("/community")}>커뮤니티</li>
        <li onClick={() => nav("/notice")} >공지사항</li>
        <li>이벤트</li>
      </ul>
    </>
  )
}

export default MainMenu