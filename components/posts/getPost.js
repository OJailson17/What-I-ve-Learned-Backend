import User from "../../models/UserModel.js";

export const getPost = async (req, res) => {
  try {
    const post = await User.findOne({ "posts._id": req.params.postId });

    post.posts.map(el => {
      if(el._id == req.params.postId) {
        return res.json({post: el})
      }
    })
  } catch (error) {
    res.json({error: "Post not found"})
  }
};
