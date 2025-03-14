import "./Viewer.css"
import Button from './Button'

const Viewer = ({ data, onEditClick, onDeleteClick }) => {
  return (
    <div className="Viewer mt-32">
      <h1 className="text-4xl">{data.title}</h1>
      <div className="NoticeWriteInfo">
        <div className="notice-nickname">
          {data.name}
        </div>
        <div className="notice-info">
          <p>조회수 : {data.viewCount}</p>
          <p>작성일 : {data.writeDate}</p>

          <div>
            <Button type={"NEGATIVE"} text={"삭제"} onClick={onDeleteClick} />
            <Button type={"POSITIVE"} text={"수정"} onClick={onEditClick} />
          </div>
        </div>
      </div>

      <div className="content_wrapper">
        <div dangerouslySetInnerHTML={{ __html: data.contents }} />
      </div>
    </div>
  )
}

export default Viewer