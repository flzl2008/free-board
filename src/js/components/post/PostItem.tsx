export default function PostItem(props: Post) {
  return (
    <>
      <article className="post-list__item" key={props.id}>
        <div className="post-list__item--title">
          <span>{props.category}</span>
          <span>{props.title}</span>
        </div>
        <div className="post-list__item--content">
          <span>{props.content}</span>
        </div>
      </article>
    </>
  );
}
