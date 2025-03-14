import React from 'react';
import { CgProfile } from 'react-icons/cg';

const CommunityViewer = ({ user, imageUrl, title, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1001]">
      {/* 배경 반투명 검정색 */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* 모달 콘텐츠 */}
      <div className="relative bg-white rounded-lg shadow-lg w-full h-full flex flex-col md:flex-row h-[90vh] mx-14">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
          onClick={onClose}
        >
          ✕
        </button>
        
        {/* 좌측: 이미지 */}
        <div className="flex-grow bg-red-100 h-full">
          {imageUrl && imageUrl !== '' ? (
            <img
              className="w-full h-full object-cover rounded-l-lg"
              src={imageUrl}
              alt="Post"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-l-lg bg-red-500">
              <span className="text-gray-500">이미지 없음</span>
            </div>
          )}
        </div>
        
        {/* 우측: 글과 댓글 */}
        <div className="w-full max-h-[250px] md:max-h-full md:w-[500px] p-6 flex flex-col">

          {/* 작성정보 */}
          <div className="flex items-center mb-4">
            <CgProfile className="w-10 h-10 rounded-full mr-3" />
            <span className="font-semibold text-gray-800">{user}</span>
          </div>
          <p className="text-gray-700 mb-4">{title}</p>

          {/* 댓글 */}
          <div className="border-t pt-4 flex-grow overflow-y-auto ">
            <h3 className="font-semibold text-gray-800 mb-2">댓글</h3>

            <ul className="text-gray-600">
              {Array.from({ length: 20 }, (_, i) => (
                <li key={i} className="mb-2">
                  user{i + 1}: 이건 테스트 댓글 #{i + 1}입니다!
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityViewer; 