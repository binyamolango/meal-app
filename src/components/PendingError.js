import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const PendingError = ({ isPending, error, setError }) => {
  return (
    <div className="pending_error">
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
    </div>
  );
}
 
export default PendingError;