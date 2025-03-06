import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
// import LoginForm from '../components/LoginForm'
import LoginForm from '../components/LoginForm'
import { UserStateContext } from "../App";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { dispatchUserInfo } = useContext(UserStateContext);
  const nav = useNavigate();
  const [loginData, setLoginData] = useState({
    id: ''
  });

  useEffect(() => {
    const storedLogin = sessionStorage.getItem('loginData');
    if (storedLogin) {
      const parsedData = JSON.parse(storedLogin);
      setLoginData(parsedData);
      dispatchUserInfo({
        type: 'LOGIN',
        payload: { id: parsedData.id},
      });
      nav('/');
    }
  }, [dispatchUserInfo, nav]);

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = () => {
    if (!loginData.id ) {
      alert('아이디입력해주세요.');
      return;
    }
    dispatchUserInfo({
      type: 'LOGIN',
      payload: { id: loginData.id},
    });
    sessionStorage.setItem('loginData', JSON.stringify(loginData));
    nav('/');
  };

  return (
    <>
      <Header />
      <LoginForm loginData={loginData}
        onChange={handleChange}
        onLoginSubmit={handleLoginSubmit} />
    </>
  )
}

export default Login