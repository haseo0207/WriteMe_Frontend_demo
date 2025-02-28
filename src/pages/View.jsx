import React, { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import MainMenu from '../components/MainMenu.jsx';
import Viewer from '../components/Viewer.jsx'
import { useParams } from 'react-router-dom';

const mokdata = [{ id: 1, title: "제목1", name: "관리자", view: 1, time: "11:00", contents: "첫번째줄<br>두번째줄<br>세번째줄", usrid: "11" },
{ id: 2, title: "제목2", name: "관리자", view: 1, time: "12:00", contents: "test2", usrid: "22" },
{ id: 3, title: "제목3", name: "관리자", view: 1, time: "13:00", contents: "test3", usrid: "33" },
{ id: 4, title: "제목4", name: "관리자", view: 1, time: "14:00", contents: "test4", usrid: "44" },
{ id: 5, title: "제목5", name: "관리자", view: 1, time: "15:00", contents: "test5", usrid: "55" },];

const NoticeView = () => {
  const params = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (params.id) {
      const foundData = mokdata.find((item) => item.id === Number(params.id));
      setNotice(foundData);
    }
  }, [params]);

  if (!notice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MainMenu />
      <Viewer data={notice} />
    </div>
  )
}

export default NoticeView