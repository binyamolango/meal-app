import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const Comment = ({ comments, isPending, error, setError }) => {
  return (
    comments && comments.length > 0 && (
      <div className="comment-section">
        <h3 className="home-title">Comments</h3>
        {isPending && (
          <div className="spinner__loading">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {error && (
          <div className='error__message'>
            <Alert variant="danger" onClose={() => setError(null)} dismissible>
              <Alert.Heading>{error}</Alert.Heading>
              <p>
                The system is not able to reach the required server for fetching the data.
                There could some problem with the API address.
              </p>
            </Alert>
          </div>
        )}
        {comments && comments.length > 0 && comments.map(comment => (
          <Card key={comment.username} className='comment-para' body>{comment.creation_date} {comment.username}: {comment.comment}</Card>
        ))}
      </div>
    )
  );
}
 
export default Comment;