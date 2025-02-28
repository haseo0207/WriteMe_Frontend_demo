import React from 'react'
import NoticeItem from '../components/NoticeItem'
import "./NoticeList.css"
const NoticeList = ({data}) => {
  return (
    <div className="noticelist">
      <div className="header_box">
        공지사항
      </div>
      <div className="list_wrapper">
        {data.map((item) => (
          <NoticeItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default NoticeList