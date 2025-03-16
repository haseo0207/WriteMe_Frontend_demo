import React, { useContext, useEffect, useState } from 'react'
import "./Header.css"
import logo from "./../assets/PlayTalk.png";
import { useNavigate } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { UserStateContext } from "../App";

const Header = () => {
  const { userInfo, dispatchUserInfo } = useContext(UserStateContext);
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!userInfo);
  }, [userInfo]);

  const logout = () => {
    dispatchUserInfo({ type: 'LOGOUT' });
    sessionStorage.removeItem('loginData');
    setIsLoggedIn(false);
    nav('/');
  }

  return (
    <header className="Header">
      <div className="header_left" onClick={() => nav("/")}>
        <img src={logo} alt="메인아이콘" />
        <div className="icon-font">WriteMe</div>
      </div>

      <ul className="header-util">
        <li>
          <IoChatbubbleEllipsesOutline className="btn-icon" />
        </li>

        {!isLoggedIn ? (
          <>
            <li onClick={() => nav("/join")}
              className="text-xs" style={{ color: "#5E35B1", cursor: "pointer" }}>
              회원가입
            </li>
            <li onClick={() => nav("/login")}
              className="text-xs" style={{ color: "red", cursor: "pointer" }}>
              로그인
            </li>
          </>
        ) : (
          <>
            <li className="text-xs">
              <label className='font-bold'>
                {userInfo.id}
              </label>
              님 환영합니다!
            </li>
            <li onClick={logout}
              className="text-xs" style={{ color: "red", cursor: "pointer" }}>
              로그아웃
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;