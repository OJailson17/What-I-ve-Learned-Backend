import User from '../../models/UserModel.js'

export const getPost = async (req, res) => {
    try {
        const post = await User.findOne({"posts._id": req.params.postId})

        post.posts.map(el => el._id == req.params.postId ? res.json({post: el}) : res.json({error: "Post not found"}))
        res.json({post})
    } catch (error) {
        console.log(error);
    }
}