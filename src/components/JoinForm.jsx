import React from 'react'
import "./JoinForm.css"
import Button from "./Button";
const JoinForm = ({ handleChange, sendInfo }) => {

  return (
    <>
      <div className='join_frame'>
        <div className='header_box join__text'>
          <p style={{ marginLeft: '10px' }}>회원가입</p>
        </div>
        {/* <div className='contract'>
            <h1>계약입니다~~~</h1>
            </div> */}

        <div className='flow_frame'>
          <div className='create_item'>
            <label>아이디</label>
            <input
              type="text"
              className="input_create_id inputbox"
              id="signupUserId"
              name="id"
              onChange={handleChange}
            />
            <Button
              text={"중복체크"}
              type={"NEGATIVE"}
            />
            {/* <p className='hideinfo'>사용가능한 아이디</p> */}
          </div>

          <div className='create_item'>
            <label>비밀번호</label>
            <input
              type="text"
              className="input_create_id inputbox"
              id="signupUserId"
              name="pw"
              onChange={handleChange}
            />
            {/* <p className='hideinfo'>비밀번호는 대소문자 또는 특수문자를 1개이상 포함해야합니다</p> */}
          </div>

          <div className='create_item'>
            <label>비밀번호 확인</label>
            <input
              type="text"
              className="input_create_id inputbox"
              id="signupUserId"
              name="pwcheck"

            />
            {/* <p className='hideinfo'>비밀번호가 일치합니다다</p> */}
          </div>

          <div className='create_item'>
            <label>닉네임</label>
            <input
              type="text"
              className="input_create_id inputbox"
              id="signupUserId"
              name="nickname"
              onChange={handleChange}
            />
            {/* <p className='hideinfo'>사용가능한 닉네임입니다</p> */}
          </div>

          <div className='create_item'>
            <label>핸드폰 번호</label>
            <input
              type="text"
              className="input_create_id inputbox"
              id="signupUserId"
              name="ph"
              onChange={handleChange}
            />
            <Button
              text={"인증번호 받기"}
              type={"NEGATIVE"}
            />
          </div>

          <div className='create_item ex'>
            <input
              type="text"
              className="input_create_id inputbox"
              id="signupUserId"
              name="phcheck"
            />
            <Button
              text={"인증번호 확인"}
              type={"NEGATIVE"}
            />
            {/* <p className='hideinfo'>인증번호가 전송되었습니다. 03:00</p> */}
          </div>

          <div className='create_item'>
            <label>이메일</label>
            <input
              type="text"
              className="input_create_id inputbox"
              id="signupUserId"
              name="email"
              onChange={handleChange}
            />
          </div>
       
          <div className='CompletJoin'>
            <Button
              onClick={() => sendInfo()}
              text={"회원가입"}
              type={"POSITIVE"}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default JoinForm