import React from 'react'
import { CgProfile } from "react-icons/cg";

const CommunityContent = ({ user, imageUrl, title, onClick }) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4 transform transition-transform duration-200 hover:scale-105"
      style={{ minheight: '650px' }}
      onClick={onClick}>

      <div className="flex items-center p-4">
        <CgProfile className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold text-gray-800">{user}</span>
      </div>
      <div className='mx-4'>
        <img
          className="w-full object-cover bg-red-100"
          src={imageUrl}
          style={{ height: '600px' }}
          alt="Post"
        />

      </div>


      <div className="p-4 min-h-12">
        <p className="text-gray-700 truncate">{title}</p>
      </div>
    </div>
  )
}

export default CommunityContent