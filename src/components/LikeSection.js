import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const LikeSection = ({ mealID }) => {
  const appID = "QiMf0dtRiuLZ03WGn5nN";
  const baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
  const likeURL = `${baseURL}/apps/${appID}/likes`;
  const [isPending, setIsPending] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setIsPending(true);

    fetch(likeURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "item_id": Number(mealID)
      })})
      .then(() => {
        setIsPending(false);
      })
  }

  return (
    <div className="like-btn">
      {!isPending && <Button variant="success" onClick={handleClick}>
        <i className="fa-solid fa-thumbs-up"></i>
      </Button>}
      {isPending && <Button variant="success" disabled >
        <i className="fa-solid fa-thumbs-up"></i>
      </Button>}
    </div>
  );
}
 
export default LikeSection;