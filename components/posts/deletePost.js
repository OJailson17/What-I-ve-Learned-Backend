import User from "../../models/UserModel.js";

export const deletePost = async (req, res) => {
  try {
    const deletedPost = await User.updateOne(
      { "posts._id": req.params.postId },
      {
        $pull: {
          posts: { _id: req.params.postId },
        },
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
