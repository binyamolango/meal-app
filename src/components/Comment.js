import Card from 'react-bootstrap/Card';

const Comment = ({ comments, isPending, error, setError }) => {
  return (
    <div className="comment-section">
      <h3 className="home-title">Comments({comments ? comments.length : 0})</h3>
      {isPending && <p>Loading comments...</p>}
      {/* {error && <p>Error: {error}</p>} */}
      {comments && comments.length > 0 && comments.map(comment => (
        <Card key={comment.username} className='comment-para' body>{comment.creation_date} <strong>{comment.username}</strong>: {comment.comment}</Card>
      ))}
    </div>
  );
}

export default Comment;