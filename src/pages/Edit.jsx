import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import { NoticeStateContext } from "../App";

const Edit = () => {
  const { noticeState, setNoticeState } = useContext(NoticeStateContext);
  const {editnotice,setEditNotice} = useState(null);

  useEffect(() => {
    setEditNotice(noticeState);
  }, []);

  if (!editnotice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <MainMenu />
      <div>
        {editnotice.contentId}dd
      </div>
    </div>
  )
}

export default Edit