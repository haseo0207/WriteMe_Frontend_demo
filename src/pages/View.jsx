import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import MainMenu from '../components/MainMenu.jsx';
import Viewer from '../components/Viewer.jsx'
import { useNavigate, useParams } from 'react-router-dom';

const mocknotice = { contentId: 1, title: "공지제목1", name: "관리자", viewCount: 100, writeDate: "11:00", contents: "공지사항 입니다 <br>해당 내용은 DB 연결후 가지고 올 데이터 입니다. <br> ", usrid: "11" };

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



const View = () => {
  const params = useParams();
  const [notice, setNotice] = useState(mocknotice);
  const navigate = useNavigate();

  // 수정 버튼 클릭 핸들러
  const handleEditClick = () => {
    sessionStorage.setItem('editNotice', JSON.stringify(notice));
    navigate(`/notice/edit/${params.id}`);
  };

  // 삭제 버튼 클릭 핸들러
  const handleDeleteClick = () => {
    // 삭제 로직 추가 가능
    navigate('/notice/');
  };

  useEffect(() => {
    // noticeList(params.id, setNotice)
  }, [params]);

  if (!notice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MainMenu />
      <Viewer data={notice}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  )
}

export default View