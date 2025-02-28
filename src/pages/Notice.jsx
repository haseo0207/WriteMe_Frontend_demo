import React from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu.jsx';
import NoticeList from '../components/NoticeList.jsx';

const mokdata = [{ id: 1, title: "공지제목1", name: "관리자", view:100 ,time:"11:00",contents:"test1",usrid:"11"},
  { id: 2, title: "공지제목2", name: "관리자", view: "1.5k" ,time:"12:00",contents:"test2",usrid:"22"},
  { id: 3, title: "공지제목3", name: "관리자", view:10 ,time:"13:00",contents:"test3",usrid:"33"},
  { id: 4, title: "공지제목4", name: "관리자", view:1 ,time:"14:00",contents:"test4",usrid:"44"},
  { id: 5, title: "공지제목5", name: "관리자", view:12 ,time:"15:00",contents:"test5",usrid:"55"},];

const Notice = () => {
  return (
    <div>
      <Header />
      <MainMenu />
      <NoticeList data = {mokdata}/>
    </div>
  )
}

export default Notice