import React from 'react';
import logo from './../assets/PlayTalk.png';
import sideImage from './../assets/LoginSideImg.png'; // 예시 경로
import Button from './Button';
import "./LoginForm.css"
import { useNavigate } from 'react-router-dom';
const LoginForm = ({ loginData, onChange, onLoginSubmit }) => {
  const nav = useNavigate();
  return (
    <div className="h-[calc(100vh-51px)] w-full flex items-center justify-center mt-10">

      <div className="flex flex-col m-8 space-y-8 bg-white shadow-2xl rounded-2xl 
      md:flex-row md:justify-between md:space-y-0 md:w-4/5 max-w-[800px] h-5/6 max-h-[600px]">

        <div className="flex flex-col justify-center p-8 w-full">
          <div>
            <div className="icon_ flex items-center mb-0 -translate-x-[10px]">
              <img src={logo} alt="메인아이콘" className="h-[80px] mt-1" />
              <h1 className="icon-font">LOGIN</h1>
            </div>
            <p className="font-medium text-xs text-gray-400 mb-8 ml-0 ">
              어서오세요! 아이디와 비밀번호를 입력해 주세요.
            </p>
          </div>
          <div>
            <div className="flex flex-col">
              <label className="text-base ml-1">아이디</label>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your ID"
                id="loginUserId"
                name="id"
                value={loginData.id}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-base  ml-1">비밀번호</label>
              <input
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                id="loginUserPw"
                name="pw"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <input type="checkbox" id="keeplogin" name="horns" />
                <label htmlFor="keeplogin" className="text-sm ml-2 font-medium text-base">
                  일주일간 로그인 유지하기
                </label>
              </div>
              <button className="font-medium text-sm text-violet-500">
                아이디/비밀번호 찾기
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-y-4">
              <Button text={"로그인"} onClick={onLoginSubmit} type={'POSITIVE'} className={"py-3 "} />
            </div>
            <div className="mt-3 flex justify-center items-center">
              <p className="text-sm font-medium text-base">회원이 아니신가요?</p>
              <button className="ml-2 font-medium text-base text-violet-500"
                onClick={() => nav("/join")}>
                회원가입
              </button>
            </div>
          </div>
        </div>

        <div>
          <img
            src={sideImage}
            alt="배경 이미지"
            className="w-[700px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;