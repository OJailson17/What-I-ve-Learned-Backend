import User from "../../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) return res.status(400).json({ error: "User not found" });

    res.json({ user });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ totalUsers: users.length, users });
  } catch (error) {
    console.log(error);
  }
};
