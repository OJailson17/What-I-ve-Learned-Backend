import User from '../../models/UserModel.js'

export const createPost = async (req, res) => {
    const {title, body, category} = req.body

    try {
        const post = await User.updateOne({_id: req.params.userId},{
            $push: {
                posts:[{
                    title,
                    body,
                    category
                }]
            }
        })

        res.json({success: true})
    } catch (error) {
        console.log(error);
    }
}