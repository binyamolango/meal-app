import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';

const AddLikes = ({ mealID, likesCol, updateLikes }) => {
  const appID = "QiMf0dtRiuLZ03WGn5nN";
  const baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
  const likeURL = `${baseURL}/apps/${appID}/likes/`;
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    updateLikes();
  }, [updateLikes]);

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
        updateLikes();
      })
  }

  const likesExist = likesCol && likesCol.filter(item => item.item_id === Number(mealID));

  return (
    <div className="like-btn">
      {!isPending && <Button variant="success" onClick={handleClick}>
        <i className="fa-solid fa-thumbs-up"></i> <Badge bg="success">
          {(likesExist && likesExist[0] && likesExist[0].likes) || 0}
        </Badge>
      </Button>}
      {isPending && <Button variant="success" disabled >
        <i className="fa-solid fa-thumbs-up"></i> <Badge bg="success">
          {(likesExist && likesExist[0] && likesExist[0].likes) || 0}
        </Badge>
      </Button>}
    </div>
  );
}
 
export default AddLikes;