import { useState } from 'react';

export default function PostEditor() {
  const postMode = '게시글 쓰기';
  const categorys = [
    { name: '공지', value: 'notice' },
    { name: '정보', value: 'info' },
    { name: '잡담', value: 'etc' },
  ];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categorys[0].value);
  const [content, setContent] = useState('');

  return (
    <>
      <div className="post-write-header">
        <h1>{postMode}</h1>
      </div>
      <div className="post-write-form">
        <div className="post-write-form__title">
          <label>
            제목
            <input
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </label>
        </div>
        <div className="post-write-form__category">
          <label>
            카테고리
            <select
              value={category}
              onChange={event => setCategory(event.target.value)}
            >
              {categorys.map((category, idx) => (
                <option key={idx} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="post-write-form__content">
          <label>
            내용
            <textarea
              value={content}
              onChange={event => setContent(event.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="post-write-footer">
          <button>글등록</button>
        </div>
      </div>
    </>
  );
}
