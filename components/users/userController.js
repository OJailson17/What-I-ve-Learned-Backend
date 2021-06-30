import User from "../../models/UserModel.js";

export const getUser = async (req, res) => {
  const id = req.params.userId

  try {
    // Check if ObjectId is valid
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      const user = await User.findById(id);
      if (!user) return res.status(400).json({ error: "User not found" });
      
      res.json({ user });
    }
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
