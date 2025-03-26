import React from 'react'

const CommunityComment = ({ username, content, profileImage }) => {
  return (
    <div className="flex items-center p-2 bg-white mb-3">
      {/* 프로필 이미지 */}
      <img
        src={profileImage}
        alt="profile"
        className="w-8 h-8 rounded-full mr-3"
      />
      {/* 댓글 내용 */}
      <div className="flex-1">
        <div className="flex items-center">
          <span className="font-semibold text-gray-800 mr-2">{username}</span>
          <span className="text-gray-500 text-xs pt-0.5">2025.03.26 15:33</span>
        </div>
        <p className="text-gray-700 mt-1">{content}</p>
      </div>
    </div>
  )
}

export default CommunityComment