import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddComment = ({ mealID, updateComments }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isPending, setIsPending] = useState(false);
  const appID = "QiMf0dtRiuLZ03WGn5nN";
  const baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
  const commentURL = `${baseURL}/apps/${appID}/comments`;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    fetch(commentURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "item_id": mealID,
        "username": name,
        "comment": text
      })})
      .then(() => {
        setIsPending(false);
        updateComments();
      });
    setName('');
    setText('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className='home-title'>Add a comment</h3>
      <Form.Group className="mb-3">
        <Form.Control
          type='text'
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Your insights"
          rows='5'
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <div className="comment-btn">
        {!isPending && <Button variant="outline-success" type="submit">Comment</Button>}
        {isPending && <Button variant="outline-success" type="submit" disabled>Commenting</Button>}
      </div>
    </Form>
  );
}
 
export default AddComment;