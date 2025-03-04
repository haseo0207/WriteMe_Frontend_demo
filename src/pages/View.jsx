import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import MainMenu from '../components/MainMenu.jsx';
import Viewer from '../components/Viewer.jsx'
import { useParams } from 'react-router-dom';
import { NoticeStateContext } from "../App";

const notice = { contentId: 1, title: "공지제목1", name: "관리자", view:100 ,time:"11:00",contents:"test1",usrid:"11"};

const noticeList = (contentId, setNotice) => {

  const query = new URLSearchParams({
    contentId: contentId
  }).toString();

  fetch(`http://localhost:8080/posts?${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      if (!response.ok) {
        // 상태 코드가 2xx가 아니라면 에러 처리
        throw new Error("실패! 서버 응답 코드: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log("받아온 데이터:", data);
      setNotice(data)
      alert("성공!");
      // return data;
    })
    .catch(error => {
      console.error(error);
      alert("오류가 발생했습니다.");
    });
}

const NoticeView = () => {
  const { noticeState, setNoticeState } = useContext(NoticeStateContext);

  const params = useParams();
  // const [notice, setNotice] = useState(null);

  useEffect(() => {
    // noticeList(params.id, setNotice)
    setNoticeState(notice);
  }, [params]);

  if (!noticeState) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MainMenu />
      <Viewer data={noticeState} />
    </div>
  )
}

export default NoticeView