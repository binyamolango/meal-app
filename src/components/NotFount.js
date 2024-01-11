import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Alert variant="danger">
        <Alert.Heading>404! You got an error!</Alert.Heading>
        <p>
          Please check if the URL you entered is valid and try again.
        </p>
        <Link to="/">
          <Button variant="danger">Back Home</Button>
        </Link>
      </Alert>
    </Container>
  );
}
 
export default NotFound;