import { useState } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../components/post/PostItem';

export default function PostList() {
  const getPostList = () =>
    // mockPostList
    [
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
  const [postList, setPostList] = useState<Post[]>(getPostList());

  return (
    <>
      <h1>게시글 목록</h1>
      <div className="post-list">
        {postList.map(post => (
          <PostItem key={`post-item-${post.id}`} {...post} />
        ))}
      </div>
      <section className="post-list-section">
        <span>
          <Link to="/editor">글쓰기</Link>
        </span>
      </section>
    </>
  );
}
