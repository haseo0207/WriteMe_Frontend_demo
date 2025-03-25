import React, { useState, useEffect, useRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import Slider from "react-slick";
import "./CommunityViewer.css"
const CommunityViewer = ({ user, imageUrl, title, comments, onClose }) => {
  const [content, setContent] = useState('');
  const textarea = useRef(null);

  const settings = {
    dots: imageUrl.length > 1, // 하단 인디케이터(점) 표시
    infinite: imageUrl.length > 1, // 슬라이드가 끝없이 순환
    speed: 500, // 슬라이드 전환 속도 (500ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    arrows: true, // 이전/다음 버튼 표시
    appendDots: dots => (
      <div>
        <ul className="relative -top-6">{dots}</ul>
      </div>
    ),
    dotsClass: 'dots_custom'
  };

  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = 'auto'; // 높이 초기화
      const scrollHeight = textarea.current.scrollHeight;
      textarea.current.style.height = `${scrollHeight > 120 ? 120 : scrollHeight}px`;
    }
  };

  const handleSubmit = () => {
    if (content.trim()) {
      console.log('댓글 전송:', content); // 전송 로직 (예: API 호출)
      setContent(''); // 입력값 초기화
      handleResizeHeight(); // 높이 초기화
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1001] text-sm">
      {/* 배경 반투명 검정색 */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* 모달 콘텐츠 */}
      <div className="relative rounded-lg shadow-lg w-3/4 h-4/5 flex flex-col md:flex-row h-[90vh] mx-16">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
          onClick={onClose}
        >
          ✕
        </button>

        {/* 좌측: 이미지 */}
        <div className="relative flex-grow w-full h-full overflow-hidden bg-black bg-opacity-80">
          {imageUrl && imageUrl.length > 0 ? (
            // <img
            //   className="w-full h-full object-cover rounded-l-lg"
            //   src={imageUrl[1]}
            //   alt="Post"
            // />
            <div className='w-full h-full'>
              <Slider {...settings} className="w-full h-full">
                {imageUrl.map((slide, index) => (
                  <img key={index} src={slide} alt={`slide-${index}`} className="object-contain w-full h-full" />
                ))}
              </Slider>
            </div>

          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-l-lg bg-blue-500">
              <span className="text-gray-500">이미지 없음</span>
            </div>
          )}
        </div>

        {/* 우측: 글과 댓글 */}
        <div className="w-full max-h-[250px] md:max-h-full md:w-[500px] p-6 pb-0 flex flex-col bg-white">
          {/* 작성정보 */}
          <div className="flex items-center mb-4">
            <CgProfile className="w-10 h-10 rounded-full mr-3" />
            <span className="font-semibold text-gray-800 text-base">{user}</span>
          </div>
          <p className="text-gray-700 mb-4">{title}</p>

          {/* 댓글 */}
          <div className="border-t pt-4 flex-grow overflow-y-auto">
            <h3 className="font-semibold text-gray-800 mb-2">댓글</h3>
            <ul className="text-gray-600">

              {comments.map((comment) => (
                <li key={comment.id} className="mb-2">
                  {comment.user}: {comment.content}
                </li>
              ))}
              
            </ul>
          </div>

          {/* 댓글 작성 */}
          <div className="flex items-end w-full my-2">
            <textarea
              ref={textarea}
              rows={1}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                handleResizeHeight();
              }}
              className={`flex-1 border-2 border-gray-100 rounded-xl p-2 text-sm outline-none bg-transparent resize-none overflow-y-auto ${content.trim() ? 'text-black' : 'text-gray-500'
                }`}
              style={{
                minHeight: '2.5rem',
                lineHeight: '2rem',
              }}
              placeholder="댓글을 입력하세요..."
            />
            <button
              onClick={handleSubmit}
              className={`ml-2 px-4 py-2 rounded-xl h-full ${content.trim()
                ? 'bg-black text-white hover:bg-purple-500'
                : 'bg-gray-300 text-gray-500'
                }`}
              disabled={!content.trim()}
            >
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityViewer;