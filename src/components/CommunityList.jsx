import React from 'react'
import CommunityContent from './CommunityContent'

const CommunityList = ({ posts, onPostClick }) => {
  return (
    <>
      <div className="container mx-auto py-6 px-4 mt-32">
      <div className="flex flex-wrap -mx-2">
        {posts.map((post, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3 px-2 mb-4" 
          >
            <CommunityContent
              user={post.userId}
              imageUrl={post.imageUrl}
              title={post.title}
              onClick={() => onPostClick(post)}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default CommunityList