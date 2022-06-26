import { useParams } from 'react-router-dom';
import PostEditorForm from '../components/post/PostEditorForm';

export default function PostEditor() {
  let isEditMode = false;
  let { postId } = useParams();
  let postInfo: Post = {
    id: '',
    title: '',
    category: '',
    content: '',
  };

  function getPostInfo(id: string): Post {
    // mock data
    return {
      id: id,
      title: 'test title',
      category: 'notice',
      content: 'test content',
    };
  }

  if (postId && isNaN(Number(postId))) {
    alert('유효하지 않은 post 입니다.');
    postId = '';
  }
  if (postId) {
    isEditMode = true;
    postInfo = getPostInfo(postId);
  }
  return (
    <>
      <div className="post-write-header">
        <h1>{isEditMode ? `${postInfo.id}번 게시글 수정` : '게시글 쓰기'}</h1>
      </div>
      <PostEditorForm id={postInfo.id} title={postInfo.title} category={postInfo.category} content={postInfo.content} />
    </>
  );
}
