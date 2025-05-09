import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import CustomSelect from "../components/CustomSelect";
import logo from './../assets/PlayTalk.png';

const domainList2 = [
  "naver.com",
  "gmail.com",
  "daum.net",
  "kakao.com",
  "nate.com",
  "outlook.com",
  "yahoo.com",
  "tistory.com",
];

const JoinMember = () => {
  const [domainList, setDomainList] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    if (domainList.length === 0) {
      setDomainList(domainList2);
    }
  }, [])
  // input value 저장
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phone: "",
    phoneVerification: "",
    emailId: "",
    emailDomain: "",
    email: ""
  });
  // 경고문 저장
  const [warnings, setWarnings] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phone: "",
    phoneVerification: "",
    emailId: "",
    emailDomain: "",
  });

  // CustomSelect "직접 입력"시 도메인 input 제어
  const [isEditable, setIsEditable] = useState(true);
  // 임의의 ID 배열
  const idlist = ["123456", "qwerty", "11111111"];

  const sendInfo = (info) => {
    console.log(info);
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: info.nickname,
        userId: info.id,
        pwd: info.password,
        email: info.email,
        phone: info.phone,
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

  // warnings의 key/value 통해 경고문 반환
  const validateField = (name, value) => {
    switch (name) {
      case "id":
        if (!value) return "아이디를 입력해주세요";
        if (value.length < 6) return "아이디는 6자 이상이어야 합니다";
        return "";
      case "password":
        if (!value) return "비밀번호를 입력해주세요";
        if (value.length < 8) return "비밀번호는 8자 이상이어야 합니다";
        return "";
      case "confirmPassword":
        if (!value) return "비밀번호 확인을 입력해주세요";
        return value === formData.password
          ? "비밀번호가 일치"
          : formData.password ? "비밀번호가 불일치" : "비밀번호를 입력해주세요";
      case "nickname":
        return value ? "" : "닉네임을 입력해주세요";
      case "phone":
        return value ? "" : "휴대번호를 입력해주세요";
      case "phoneVerification":
        return value ? "" : "인증번호를 입력해주세요";
      case "emailId":
        return value ? "" : "이메일을 입력해주세요";
      case "emailDomain":
        return value ? "" : "도메인을 입력해주세요";
      default:
        return "";
    }
  };

  // 중복 체크 함수
  const checkDuplicateId = (id) => {
    const isDuplicate = idlist.includes(id);
    return isDuplicate ? "이미 존재하는 ID입니다" : "사용 가능한 ID입니다";
  };

  // input 값 입력시 경고문 제어
  const handleChange = (e) => {
    const { name, value } = e.target;
    const valueWithoutSpaces = value.replace(/\s/g, '');

    setFormData((prev) => ({ ...prev, [name]: valueWithoutSpaces }));

    setWarnings((prev) => ({
      ...prev,
      [name]: validateField(name, valueWithoutSpaces),
    }));

    if (name === "password" && warnings.confirmPassword === "비밀번호를 입력해주세요") {
      setWarnings((prev) => ({
        ...prev,
        ["confirmPassword"]: "비밀번호가 불일치",
      }));
    }

    if (name === "password" && valueWithoutSpaces === "") {
      setWarnings((prev) => ({
        ...prev,
        ["confirmPassword"]: "비밀번호를 입력해주세요",
      }));
    }
  };

  // 도메인 선택 핸들러
  const handleDomainSelect = (selectedDomain) => {
    setFormData((prev) => ({ ...prev, emailDomain: selectedDomain }));
    setIsEditable(selectedDomain === "");
    setWarnings((prev) => ({
      ...prev,
      ["emailDomain"]: validateField("emailDomain", selectedDomain),
    }));
  };

  // 중복 확인 버튼 핸들러
  const handleDuplicateCheck = () => {
    const idWarning = validateField("id", formData.id);
    if (idWarning) {
      setWarnings((prev) => ({ ...prev, id: idWarning }));
    } else {
      setWarnings((prev) => ({ ...prev, id: checkDuplicateId(formData.id) }));
    }
  };

  // 가입완료 버튼 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 필드 유효성 검사
    const newWarnings = {};
    Object.keys(formData).forEach((key) => {
      newWarnings[key] = validateField(key, formData[key]);
    });

    // 아이디 조건 충족 시 중복 체크
    if (!newWarnings.id) {
      const isDuplicate = idlist.includes(formData.id);
      newWarnings.id = isDuplicate ? "이미 존재하는 ID입니다" : "사용 가능한 ID입니다";
    }

    setWarnings(newWarnings);

    // 모든 조건 통과 시 이메일 합성 후 제출
    if (
      Object.values(newWarnings).every(
        (warning) => !warning || warning === "비밀번호가 일치" || warning === "사용 가능한 ID입니다"
      ) && (newWarnings.id !== "이미 존재하는 ID입니다" || !newWarnings.id)
    ) {
      const fullEmail = `${formData.emailId}@${formData.emailDomain}`;
      setFormData((prev) => {
        const updatedFormData = { ...prev, email: fullEmail };
        sendInfo(updatedFormData);
        return updatedFormData;
      });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-10">
        <div className="bg-white flex flex-col m-8 space-y-4 shadow-2xl rounded-2xl max-w-[800px] w-full p-8">
          <div>
            <div className="icon_ flex items-center mb-0 -translate-x-[10px] -translate-y-[10px] -mb-3">
              <img src={logo} alt="메인아이콘" className="h-[80px] mt-1 " />
              <h1 className="icon-font">SIGN UP</h1>
            </div>
            <p className="font-medium text-xs text-gray-400 ">
              회원이 되어 다양한 혜택을 경험해 보세요!
            </p>
          </div>

          <div>
            <div className="flex space-x-3 ml-1 mt-4">
              <label className="text-base">아이디</label>
              {warnings.id && (
                <p
                  className={`mt-1 text-xs ${warnings.id === "사용 가능한 ID입니다" ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {warnings.id}
                </p>
              )}
            </div>
            <div className="relative mt-1">
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 bg-transparent text-sm"
                placeholder="아이디 입력(6~20자)"
                id="createUserId"
                name="id"
                value={formData.id}
                onChange={handleChange}
                minLength={6}
                maxLength={20}
              />
              <Button
                className="absolute right-3 px-7 py-1.5 text-sm top-1/2 -translate-y-1/2 font-normal"
                text="중복 확인"
                type="POSITIVE"
                onClick={handleDuplicateCheck}
              />
            </div>
          </div>

          <div>
            <div className="flex space-x-3 ml-1">
              <label className="text-base">비밀번호</label>
              {warnings.password && (
                <p className="text-red-500 mt-1 text-xs">{warnings.password}</p>
              )}
            </div>
            <input
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 bg-transparent text-sm"
              placeholder="비밀번호 입력(문자,숫자,특수문자 포함 8~20자)"
              id="createUserPw"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              maxLength={20}
            />
          </div>

          <div>
            <div className="flex space-x-3 ml-1">
              <label className="text-base">비밀번호 확인</label>
              {warnings.confirmPassword && (
                <p
                  className={`mt-1 text-xs ${warnings.confirmPassword === "비밀번호가 일치"
                    ? "text-green-500"
                    : "text-red-500"
                    }`}
                >
                  {warnings.confirmPassword}
                </p>
              )}
            </div>
            <input
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 bg-transparent text-sm"
              placeholder="비밀번호 재입력"
              id="checkUserPw"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              maxLength={20}
            />
          </div>

          <div>
            <div className="flex space-x-3 ml-1">
              <label className="text-base">닉네임</label>
              {warnings.nickname && (
                <p className="text-red-500 mt-1 text-xs">{warnings.nickname}</p>
              )}
            </div>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 bg-transparent text-sm"
              placeholder="닉네임을 입력(1~10자)"
              id="createUserNickName"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              minLength={1}
              maxLength={10}
            />
          </div>

          <div>
            <div className="flex space-x-3 ml-1">
              <label className="text-base">휴대번호</label>
              {(warnings.phone || warnings.phoneVerification) && (
                <p className="text-red-500 mt-1 text-xs">
                  {warnings.phone || warnings.phoneVerification}
                </p>
              )}
            </div>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 bg-transparent text-sm"
              placeholder="휴대폰 번호 입력 ('-'제외 11자리)"
              id="createUserPh"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="relative mt-1">
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 bg-transparent text-sm"
                placeholder="인증번호를 입력하세요"
                id="checkUserPh"
                name="phoneVerification"
                value={formData.phoneVerification}
                onChange={handleChange}
              />
              <Button
                className="absolute right-3 px-7 py-1.5 text-sm top-1/2 -translate-y-1/2 font-normal"
                text="인증번호 받기"
                type="POSITIVE"
              />
            </div>
          </div>

          <div>
            <div className="flex space-x-3 ml-1">
              <label className="text-base">이메일</label>
              {(warnings.emailId || warnings.emailDomain) && (
                <p className="text-red-500 mt-1 text-xs">
                  {warnings.emailId || warnings.emailDomain}
                </p>
              )}
            </div>
            <div className="mt-1 flex items-center space-x-3">
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 bg-transparent text-sm"
                placeholder="이메일을 입력하세요"
                id="createUserEmail"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
              />
              <p className="text-lg font-medium font-bold">@</p>
              <input
                type="text"
                className={`w-full border-2 border-gray-100 rounded-xl p-2.5 mt-0 text-sm 
                  ${isEditable ? "bg-transparent" : "bg-gray-100 cursor-default focus:outline-none"
                  }`}
                placeholder="도메인을 입력하세요"
                id="createEmailDomain"
                name="emailDomain"
                value={formData.emailDomain}
                onChange={handleChange}
                readOnly={!isEditable}
              />
              <CustomSelect domainList={domainList} onSelect={handleDomainSelect} />
            </div>
          </div>

          <div className="pt-4 flex flex-col w-full">
            <Button
              text="가입완료"
              type="POSITIVE"
              className="py-4"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinMember