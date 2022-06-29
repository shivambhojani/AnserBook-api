const getAllPosts = () => {
  const posts = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ];
  return posts;
};

const getAPost = id => {
  const posts = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ];
  return posts.filter(post => post.id == id);
};

export const postService = {
  getAllPosts,
  getAPost,
};
