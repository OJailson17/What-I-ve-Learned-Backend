import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/UserModel.js";
import {
  registerValidation,
  loginValidation,
} from "../validation/inputValidation.js";
import config from "../../config/index.js";

// Generates JWT token
const generateToken = async (params) => {
  return jwt.sign(params, config.SECRET_HASH_TOKEN, {
    expiresIn: 86400,
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Data validation
  const { error } = await registerValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // Check if email exist
  const emailExist = await User.findOne({ email });
  if (emailExist) return res.status(400).json({ msg: "Email already exist" });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new User
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    // Save user into database
    const savedUser = await user.save();

    // Generate jwt token
    const token = await generateToken({ id: user.id });

    // Reset the password
    savedUser.password = undefined;

    // Send the response
    res.json({ savedUser, token, logged: true });
  } catch (error) {
    // Send if some error occor
    res.status(400).json({ error: error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Data validation
  const { error } = await loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // Check if email exist
  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.status(400).json({ error: "Email doesn't exist" });

  // Check password
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).json({ error: "Invalid Password" });

  // Generate jwt token
  const token = await generateToken({ id: user.id });

  // Reset the password
  user.password = undefined;

  // Send the response
  res.json({ logged: true, user, token });
  
  } catch (error) {
    res.status(400).json({error})
  }
};
