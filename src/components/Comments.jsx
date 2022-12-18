import "./Comments.css";
import NewComment from "./NewComment";
const Comments = ({ comments, id }) => {
  return (
    <div>
      {(comments.length !== 0 &&
        comments.map((comment) => {
          return (
            <div key={comment.id}>
              <div className="user">
                <img src={comment.user.profile_photo} alt="" />
                <div className="user-right">
                  <span>{comment.user.fullName}</span>
                  <p>{comment.text}</p>
                </div>
              </div>
            </div>
          );
        })) || <div>Henüz Yorum Yapılmamış!</div>}
      <NewComment products_id={id} />
    </div>
  );
};

export default Comments;
