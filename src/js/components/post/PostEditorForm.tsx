import { useState } from 'react';

export default function PostEditorForm(props: Post) {
  const categorys = [
    { name: '공지', value: 'notice' },
    { name: '정보', value: 'info' },
    { name: '잡담', value: 'etc' },
  ];
  const [title, setTitle] = useState(props.title ? props.title : '');
  const [category, setCategory] = useState(props.category ? props.category : categorys[0].value);
  const [content, setContent] = useState(props.content ? props.content : '');

  return (
    <>
      <div className="post-write-form">
        <div className="post-write-form__title">
          <label>
            제목
            <input value={title} onChange={event => setTitle(event.target.value)} />
          </label>
        </div>
        <div className="post-editor-form__category">
          <label>
            카테고리
            <select value={category} onChange={event => setCategory(event.target.value)}>
              {categorys.map((category, idx) => (
                <option key={idx} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="post-editor-form__content">
          <label>
            내용
            <textarea value={content} onChange={event => setContent(event.target.value)}></textarea>
          </label>
        </div>
        <div className="post-editor-footer">
          <button>글등록</button>
        </div>
      </div>
    </>
  );
}
