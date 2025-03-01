import React from 'react'
import "./Viewer.css"
import Button from './Button'
const Viewer = ({ data }) => {

  return (
    <div className="Viewer">
      <h1>{data.title}</h1>
      <div className="NoticeWriteInfo">
        <div className="notice-nickname">
          {data.name}
        </div>
        <div className="notice-info">
          <p>조회수 : {data.view}</p>
          <p>작성일 : {data.time}</p>
          <Button type={"POSITIVE"} text={"수정"}/>
        </div>
      </div>

      <div className="content_wrapper">
        <div dangerouslySetInnerHTML={{ __html: data.contents }} />
      </div>
    </div>
  )
}

export default Viewer