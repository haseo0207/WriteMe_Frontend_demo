import React, { useState } from 'react'
import "./LoginForm.css"
import logo from "./../assets/PlayTalk.png";
import Button from './Button';
const LoginForm = ({ onLoginSubmit }) => {
    const [loginData, setLoginData] = useState({
        id: '',
        pw: '',
    });

    const handleSubmit = (e) => {
        if (!loginData.id || !loginData.pw) {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
          }
        onLoginSubmit(loginData);
    };

    const handleChange = (e) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

    return (
        <>
            <div className='login-frame'>
                <div className='login-info'>
                    <div className='login-icon'>
                        <img src={logo} alt="메인아이콘" height="50px" />
                        <div className="icon-font">LOGIN</div>
                    </div>

                    <div className='login-id'>
                        <label htmlFor="loginUserId">아이디</label>
                        <input
                            type="text"
                            className="input-id"
                            id="loginUserId"
                            name="id"
                            value={loginData.id}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='login-pw'>
                        <label htmlFor="loginUserPw">비밀번호</label>
                        <input
                            type="password"
                            className="input-pw"
                            id="loginUserPw"
                            name="pw"
                            value={loginData.pw}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='login-check'>
                        <input type="checkbox" id="keeplogin" name="horns" />
                        <label htmlFor="keeplogin">일주일간 로그인 유지하기</label>
                    </div>

                    <Button text={"로그인"} type={"POSITIVE"} onClick={handleSubmit}/>
                    
                    <div className='find-idpw'>
                        <a href="javascript:void(0)">아이디/비밀번호 찾기</a>
                    </div>

                </div>
            </div>
        </>

    )
}

export default LoginForm