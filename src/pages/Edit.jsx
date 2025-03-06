import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Editor from '../components/Editor'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [notice, setNotice] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotice = sessionStorage.getItem('editNotice');
    if (storedNotice) {
      setNotice(JSON.parse(storedNotice));
    }
  }, []);

  const handleTitleChange = (e) => {
    setNotice(prev => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleContentChange = (e) => {
    setNotice(prev => ({
      ...prev,
      contents: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log('수정된 데이터:', notice);
    sessionStorage.removeItem('editNotice');
    navigate(`/notice/view/${params.id}`);
  };

  if (!notice) {
    return <div>로딩중...</div>;
  }
  return (
    <div>
      <Header />
      <MainMenu />
      <Editor title={notice.title}
        contents={notice.contents}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
        onSubmit={handleSubmit} />
    </div>
  )
}

export default Edit