import React from 'react'
import { CgProfile } from "react-icons/cg";
import { PlusSquare } from 'react-feather';
const CommunityContent = ({ user, imageUrl, title, onClick }) => {
  return (
    <div className="w-[400px]  mx-auto bg-white shadow-md rounded-lg mb-4 
    transform transition-transform duration-200 hover:scale-105"
      style={{ minheight: '650px' }}
      onClick={onClick}>

      <div className="flex items-center p-4">
        <CgProfile className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold text-gray-800">{user}</span>
      </div>
      <div className='mx-4 relative'>
        <img
          className="w-full object-cover bg-red-100"
          // src={imageUrl[0]}
          style={{ height: '300px' }}
          alt="Post"
        />
        {imageUrl && imageUrl.length > 1 && (
          <div className='absolute top-2 right-4'><PlusSquare size={25} color='white' /></div>
        )}
      </div>


      <div className="p-4 min-h-12">
        <p className="text-gray-700 truncate text-sm">{title}</p>
      </div>
    </div>
  )
}

export default CommunityContent