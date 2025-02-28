import React from 'react'
import "./Viewer.css"
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
        </div>
      </div>

      <div className="content_wrapper">
        <div dangerouslySetInnerHTML={{ __html: data.contents }} />
      </div>
    </div>
  )
}

export default Viewer