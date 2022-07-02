import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PostEditorForm(props: PostEditorFormProps) {
  const categorys: Category[] = props.categorys;
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setTitle(props.postInfo.title);
    setCategory(props.postInfo.category);
    setContent(props.postInfo.content);
  });

  return (
    <>
      <div className="post-editor-form">
        <div className="post-editor-form__title">
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
          <Link to="/">목록으로</Link>
        </div>
      </div>
    </>
  );
}
