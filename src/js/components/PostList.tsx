import { useState } from 'react';

export default function PostList() {
  const mockPostList = [
    {
      id: 1,
      title: 'test',
      content: '게시글 내용입니다.',
      category: 'notice',
    },
    {
      id: 2,
      title: 'test2',
      content: '게시글 내용입니다2.',
      category: 'info',
    },
  ];
  const [postList, setPostList] = useState<Post[]>(mockPostList);

  return (
    <>
      <h1>게시글 목록</h1>
      <div className="post-list">
        {postList.map(post => (
          <article className="post-list__item" key={post.id}>
            <div className="post-list__item--title">
              <span>{post.category}</span>
              <span>{post.title}</span>
            </div>
            <div className="post-list__item--content">
              <span>{post.content}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
