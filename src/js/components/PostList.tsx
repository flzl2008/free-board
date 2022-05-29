import { useState } from 'react';

export default function PostList() {
  const [postList, setPostList] = useState<Post[]>([]);

  return (
    <>
      {postList.map(post => {
        <article className="post-list">
          <div className="post-list__title">
            <span>{post.category}</span>
            <span>{post.title}</span>
          </div>
          <div className="post-list__content">
            <span>{post.content}</span>
          </div>
        </article>;
      })}
    </>
  );
}
