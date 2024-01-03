import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddComment = () => {
  return (
    <Form>
      <h3 className='home-title'>Add a comment</h3>
      <Form.Group className="mb-3">
        <Form.Control
          type='text'
          placeholder="Your name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Your insights"
          rows='5'
          required
        />
      </Form.Group>

      <div className="comment-btn">
        <Button variant="outline-success" type="submit">
          Comment
        </Button>
      </div>
    </Form>
  );
}
 
export default AddComment;