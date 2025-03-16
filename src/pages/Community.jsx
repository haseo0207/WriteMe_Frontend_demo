import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import CommunityList from '../components/CommunityList'
import CommunityViewer from '../components/CommunityViewer';

const dummyPosts = [
  {
    user: 'user1',
    imageUrl: '/Img/bird.jpg',
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
    name: '',

  },
  {
    user: 'user2',
    imageUrl: '/Img/cat.jpg',
    title: '새로 산 카메라로 찍은 사진 어때?',
    contentId: '',
    name: '',
  },
  {
    user: 'user3',
    imageUrl: '/Img/desert.jpg',
    title: '저녁 메뉴 추천 받아요!',
    contentId: '',
    name: '',
  },
  {
    user: 'user4',
    imageUrl: '/Img/flowers.jpg',
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
    name: '',

  },
  {
    user: 'user5',
    imageUrl: '/Img/french-bulldog.jpg',
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
    name: '',

  },
  {
    user: 'user6',
    imageUrl: '/Img/torii.jpg',
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
    name: '',

  },
];


const Community = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post); // 클릭된 게시물 저장
  };

  const handleCloseModal = () => {
    setSelectedPost(null); // 모달 닫기
  };

  // 모달 열릴 때 배경 스크롤 방지
  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // 클린업 함수
    return () => document.body.classList.remove('overflow-hidden');
  }, [selectedPost]);

  return (
    <div>
      <Header />
      <MainMenu />
      <CommunityList posts={dummyPosts} onPostClick={handlePostClick} />
      {selectedPost && (
        <CommunityViewer
          user={selectedPost.user}
          imageUrl={selectedPost.imageUrl}
          title={selectedPost.title}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Community