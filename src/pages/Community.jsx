import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import CommunityList from '../components/CommunityList'
import CommunityViewer from '../components/CommunityViewer';

const dummyPosts = [
  {
    user: 'user1',
    imageUrl: ['/Img/bird.jpg', '/Img/cat.jpg'],
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
  },
  {
    user: 'user2',
    imageUrl: ['/Img/cat.jpg'],
    title: '새로 산 카메라로 찍은 사진 어때?',
    contentId: '',
  },
  {
    user: 'user3',
    imageUrl: ['/Img/desert.jpg', '/Img/cat.jpg'],
    title: '저녁 메뉴 추천 받아요!',
    contentId: '',
  },
  {
    user: 'user4',
    imageUrl: ['/Img/flowers.jpg'],
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
  },
  {
    user: 'user5',
    imageUrl: ['/Img/french-bulldog.jpg'],
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
  },
  {
    user: 'user6',
    imageUrl: ['/Img/torii.jpg'],
    title: '오늘 날씨가 너무 좋다! 산책 가야지~',
    contentId: '',
  },
];

// 게시글 리스트 가져오기
const fetchPostList = (setPostList) => {
  // fetch통해 데이터 가지고오기기
  setPostList(dummyPosts);
};

// 게시글 상세 데이터 가져오기
// DB연결시 contentId 통해 재쿼리
const fetchPostDetails = (post,setSelectedPost) => {
  const dummyResponse = {
    ...post,
    comments: [
      { id: 1, user: "user2", content: "최신 댓글 1" },
      { id: 2, user: "user3", content: "최신 댓글 2" },
    ],
  };
  setSelectedPost(dummyResponse);
};

const Community = () => {
  const [postList, setPostList] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPostList(setPostList);
  }, []);

  const handlePostClick = (post) => {
    fetchPostDetails(post,setSelectedPost);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  // 모달 열릴 때 배경 스크롤 방지
  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPost]);

  if (!postList) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <MainMenu />
      <CommunityList posts={postList} onPostClick={handlePostClick} />
      {selectedPost && (
        <CommunityViewer
          user={selectedPost.user}
          imageUrl={selectedPost.imageUrl}
          title={selectedPost.title}
          comments={selectedPost.comments}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Community;