import User from '../../models/UserModel.js'

export const getPosts = async (req, res) => {
    try {
        const allPosts = await User.findOne({_id: req.params.userId})
        res.json({posts: allPosts.posts})
    } catch (error) {
        console.log(error);
    }
}