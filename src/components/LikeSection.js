import { useState } from "react";
import AddLikes from "./AddLike";

const LikeSection = ({ mealID }) => {
  const appID = "QiMf0dtRiuLZ03WGn5nN";
  const baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
  const likeURL = `${baseURL}/apps/${appID}/likes/`;

  const [likesCol, setLikesCol] = useState(null);

  const updateLikes = async () => {
    try {
      const res = await fetch(likeURL);
      const data = await res.json();
      setLikesCol(data);
    } catch (err) {
      return err.message;
    }
  };

  return (
    <div className="like-section">
      <AddLikes mealID={mealID} updateLikes={updateLikes} likesCol={likesCol} />
    </div>
  )
}
 
export default LikeSection;