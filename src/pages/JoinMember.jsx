import React, { useState } from 'react'
import JoinForm from '../components/JoinForm'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';

const JoinMember = () => {
  const [info, setInfo] = useState({id : null, pw : null, nickname : null, ph : null, email : null});
  const nav = useNavigate();
  const handleChange = (e) => {
    const{name,value} = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo, [name]: value,  
    }));
  }

  const sendInfo = () =>{
    console.log(info);
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: info.nickname,
        userId: info.id,
        pwd: info.pw,
        email: info.email,
        phone: info.ph,
        gender: "1"
      })
    })
    .then(response => {
      if (!response.ok) {
        // 상태코드가 2xx가 아니라면 에러 처리
        throw new Error("회원가입 실패! 서버 응답 코드: " + response.status);
      }
      // 200 OK 
      alert("회원가입 성공!");
      nav("/");
    })
    .catch(error => {
      console.error(error);
      alert("회원가입 중 오류가 발생했습니다.");
    });
    
  }
  return (
    <div>
      <Header />
      <JoinForm handleChange = {handleChange} sendInfo = {sendInfo}/>
    </div>
  )
}

export default JoinMember