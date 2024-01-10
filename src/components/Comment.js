import Card from 'react-bootstrap/Card';
import PendingError from './PendingError';

const Comment = ({ comments, isPending, error, setError }) => {
  return (
    <div className="comment-section">
      <h3 className="home-title">Comments</h3>
      <PendingError
        isPending={isPending}
        error={error}
        setError={setError}
      />
      {comments && comments.length > 0 && comments.map(comment => (
        <Card key={comment.username} className='comment-para' body>{comment.creation_date} {comment.username} - {comment.comment}</Card>
      ))}
    </div>
  );
}
 
export default Comment;