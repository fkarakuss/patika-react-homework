import axios from "axios";
const getData = async (userId) => {
  const getUserUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const userResult = await axios.get(getUserUrl);

  const getPostUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const postResult = await axios.get(getPostUrl);

  userResult.data.posts = postResult.data;

  return userResult.data;
};

export default getData;
