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
            className="w-full 2xl:w-1/2 px-2 mb-4" 
          >
            <CommunityContent
              user={post.user}
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