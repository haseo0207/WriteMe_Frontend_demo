import React from 'react'
import "./Login_c.css"
import logo from "./../assets/PlayTalk.png";
const Login = () => {
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
                        />
                    </div>

                    <div className='login-pw'>
                        <label htmlFor="loginUserPw">비밀번호</label>
                        <input
                            type="password"
                            className="input-pw"
                            id="loginUserPw"
                            name="pw"
                        />
                    </div>

                    <div className='login-check'>
                        <input type="checkbox" id="keeplogin" name="horns" />
                        <label htmlFor="keeplogin">일주일간 로그인 유지하기</label>
                    </div>

                    <button className='btn__login'>
                        로그인
                    </button>

                    <div className='find-idpw'>
                    <a href="javascript:void(0)">아이디/비밀번호 찾기</a>
                    </div>    
                    
                </div>
            </div>
        </>

    )
}

export default Login