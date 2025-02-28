import React, { useContext } from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import { UserStateContext } from "../App";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const {dispatchUserInfo} = useContext(UserStateContext);
  const nav = useNavigate();
  const handleLoginSubmit = (e) => {
    console.log(e)
    dispatchUserInfo({
      type : "LOGIN",
      payload : {id: e.id, nickname: e.id}
    })
    nav("/");
  }

  return (
    <>
      <Header />
      <LoginForm onLoginSubmit={handleLoginSubmit} />
    </>
  )
}

export default Login