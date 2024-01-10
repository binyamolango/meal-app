import AddComment from './AddComment';
import Comment from './Comment';
import { useState } from 'react';

const CommentSection = ({ mealID }) => {
  const appID = "QiMf0dtRiuLZ03WGn5nN";
  const baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
  const commentURL = `${baseURL}/apps/${appID}/comments?item_id=${mealID}`;
  const [comments, setComments] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const updateComments = async () => {
    try {
      const res = await fetch(commentURL);
      if (!res.ok) {
        throw Error("Error! Couldn't fetch the data");
      } else {
        const data = await res.json();
        setComments(data);
        setIsPending(false);
      }
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return (
    <div>
      <Comment
        comments={comments}
        isPending={isPending}
        error={error}
        setError={setError}
      />
      <AddComment mealID={mealID} updateComments={updateComments} />
    </div>
  );
}

export default CommentSection;