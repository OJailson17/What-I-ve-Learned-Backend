import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    select: false,
  },
  registerDate: {
    type: Date,
    default: Date.now()
  },
  posts: [
    {
      title: String,
      body: String,
      category: String,
      postDate: {
        type: Date,
        default: Date.now()
      }
    },
  ],
});

const User = mongoose.model("Usuário", userSchema);

export default User;
