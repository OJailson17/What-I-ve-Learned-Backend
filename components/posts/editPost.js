import User from '../../models/UserModel.js'

export const editPost = async (req, res) => {
    const {title, body, category} = req.body

try {
    const updatedPost = await User.updateOne({"posts._id": req.params.postId},{
        $set: {
            "posts.$.title": title,
            "posts.$.body": body,
            "posts.$.category": category
        }
    })

    res.json({success: true})
} catch (error) {
    res.json({error})
}
}