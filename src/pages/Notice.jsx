import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu.jsx';
import NoticeList from '../components/NoticeList.jsx';

const noticelist =[{ contentId: 1, title: "공지제목1", name: "관리자", view:100 ,time:"11:00",contents:"test1",usrid:"11"},
  { contentId: 2, title: "공지제목2", name: "관리자", view: "1.5k" ,time:"12:00",contents:"test2",usrid:"22"},
  { contentId: 3, title: "공지제목3", name: "관리자", view:10 ,time:"13:00",contents:"test3",usrid:"33"},
  { contentId: 4, title: "공지제목4", name: "관리자", view:1 ,time:"14:00",contents:"test4",usrid:"44"},
  { contentId: 5, title: "공지제목5", name: "관리자", view:12 ,time:"15:00",contents:"test5",usrid:"55"},];


const noticeList = (setNoticeList) => {

  fetch(`http://localhost:8080/posts`, {
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
      setNoticeList(data)
      alert("성공!");
    })
    .catch(error => {
      console.error(error);
      alert("오류가 발생했습니다.");
    });
}

const Notice = () => {
  // const [noticelist, setNoticeList] = useState(null);

  useEffect(() => {
    // noticeList(setNoticeList);
  }, []);

  if (!noticelist) {
    // return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MainMenu />
      <NoticeList data={noticelist} />
    </div>
  )
}

export default Notice