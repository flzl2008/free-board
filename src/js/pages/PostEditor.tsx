import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostEditorForm from '../components/post/PostEditorForm';

export default function PostEditor() {
  const categorys: Category[] = [
    { name: '공지', value: 'notice' },
    { name: '정보', value: 'info' },
    { name: '잡담', value: 'etc' },
  ];

  const [isEditMode, setIsEditMode] = useState(false);
  const [postInfo, setPostInfo] = useState<Post>({
    id: '',
    title: '',
    category: categorys[0].value,
    content: '',
  });
  const { postId } = useParams();
  const navigate = useNavigate();
  const goPostList = () => navigate('/', { replace: true });

  const getPostInfo = (id: string): Post =>
    // mock data
    ({
      id: id,
      title: 'test title',
      category: 'notice',
      content: 'test content',
    });

  useEffect(() => {
    if (postId) {
      if (isNaN(Number(postId))) {
        goPostList();
        return alert('유효하지 않은 post 입니다.');
      }

      setIsEditMode(true);
      setPostInfo(getPostInfo(postId));
    }
  }, [postId]);

  return (
    <>
      <div className="post-write-header">
        <h1>{isEditMode ? `${postInfo.id}번 게시글 수정` : '게시글 쓰기'}</h1>
      </div>
      <PostEditorForm postInfo={postInfo} categorys={categorys} />
    </>
  );
}
