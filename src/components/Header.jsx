import React from 'react'
import "./Header.css"
import logo from "./../assets/PlayTalk.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import MainMenu from './MainMenu.jsx';
const Header = () => {
    return (
        <header>
            <div className='top'>
                <div className="logo">
                    <img src={logo} alt="메인아이콘" />
                    <div className="icon-font">WriteMe</div>
                </div>

                <div className="right-items">
                    <ul className="items">
                        <li>
                            <IoChatbubbleEllipsesOutline className='btn-icon' />
                        </li>
                        <li style={{ color: '#5E35B1' }}>회원가입</li>
                        <li style={{ color: 'red' }}>로그인</li>
                    </ul>
                </div>
            </div>

            <div className='mainmenu'>
                <MainMenu />
            </div>

        </header>
    )
}

export default Header