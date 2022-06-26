import { useState } from 'react';
import PostItem from '../components/post/PostItem';

export default function PostList() {
  function getPostList() {
    // mockPostList
    return [
      {
        id: '1',
        title: 'test',
        content: '게시글 내용입니다.',
        category: 'notice',
      },
      {
        id: '2',
        title: 'test2',
        content: '게시글 내용입니다2.',
        category: 'info',
      },
    ];
  }
  const [postList, setPostList] = useState<Post[]>(getPostList());

  return (
    <>
      <h1>게시글 목록</h1>
      <div className="post-list">
        {postList.map(post => (
          <PostItem key={`post-item-${post.id}`} {...post} />
        ))}
      </div>
    </>
  );
}
