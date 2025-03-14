import React from 'react'
import "./Editor.css"
import Button from './Button'

const Editor = ({ title, contents, onTitleChange, onContentChange, onSubmit }) => {
  return (
    <div className="Editor mt-32">
      <div className="editortitle">
        <input
          className="input-editortitle"
          value={title}
          onChange={onTitleChange}
          placeholder="제목을 입력하세요"
        />
        <Button text="수정완료" type="POSITIVE" onClick={onSubmit} />
      </div>
      <div className="editorcontent">
        <textarea
          name="content"
          value={contents}
          onChange={onContentChange}
          placeholder="수정할 내용?"
        />
      </div>
    </div>
  );
};

export default Editor;