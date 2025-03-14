import React from 'react'
import NoticeItem from '../components/NoticeItem'
import "./NoticeList.css"
const NoticeList = ({ data }) => {
  return (
    <div className="noticelist mt-32">
      <div className="header_box text-4xl">
        공지사항
      </div>
      <div className="list_wrapper">
        {data.map((item) => (
          <NoticeItem key={item.contentId} {...item} />
        ))}
      </div>
    </div>
  )
}

export default NoticeList