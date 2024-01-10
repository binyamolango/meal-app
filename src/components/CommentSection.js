import useFetch from './useFetch';
import AddComment from './AddComment';
import Comment from './Comment';

const CommentSection = ({ mealID }) => {
  const appID = "QiMf0dtRiuLZ03WGn5nN";
  const baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
  const commentURL = `${baseURL}/apps/${appID}/comments?item_id=${mealID}`;

  const { data: comments, isPending, error, setError, setData: setComments } = useFetch(commentURL);

  const updateComments = () => {
    // Fetch the updated comments data
    fetch(commentURL)
      .then(response => {
        if (!response.ok) {
          throw Error("Error fetching the comments!");
        } else {
          return response.json();
        }
      })
      .then(data => {
        // Update the comments state with the new data
        setComments(data);
      })
      .catch(error => {
        // Handle any error that occurs during the fetch
        setError(error.message);
      });
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