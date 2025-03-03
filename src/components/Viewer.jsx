import React, { useContext } from 'react'
import "./Viewer.css"
import Button from './Button'
import { useNavigate, useParams } from 'react-router-dom';

const Viewer = ({ data }) => {

  const nav = useNavigate();
  const params = useParams();
  return (
    <div className="Viewer">
      <h1>{data.title}</h1>
      <div className="NoticeWriteInfo">
        <div className="notice-nickname">
          {data.name}
        </div>
        <div className="notice-info">
          <p>조회수 : {data.viewCount}</p>
          <p>작성일 : {data.writeDate}</p>
          <Button type={"POSITIVE"} text={"수정"} onClick={() => nav(`/notice/edit/${params.id}`)} />
        </div>
      </div>

      <div className="content_wrapper">
        <div dangerouslySetInnerHTML={{ __html: data.contents }} />
      </div>
    </div>
  )
}

export default Viewer