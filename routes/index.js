import { Router } from "express";

import { registerUser, loginUser } from "../components/users/userAuth.js";
import { createPost } from "../components/posts/createPost.js";
import { editPost } from "../components/posts/editPost.js";
import { deletePost } from "../components/posts/deletePost.js";
import { getPost } from "../components/posts/getPost.js";
import { getPosts } from "../components/posts/getPosts.js";
import { getUser } from "../components/users/userController.js";
import { getUsers } from "../components/users/userController.js";

import authMiddleware from "../components/middlewares/auth.js";

const router = Router();

const routes = (app) => {
  // !Authentication Routes

  // @route POST /api/v1/user/register
  // desc register the user in the database
  // access Private
  app.post("/api/v1/user/register", registerUser); // Register user

  // @route POST /api/v1/user/login
  // desc authenticate user informations
  // access Private
  app.post("/api/v1/user/login", loginUser); // Authenticate user

  // !User Routes

  // @route GET /api/v1/users/:userId
  // desc get one user data according to user ID
  // access Public
  app.get("/api/v1/user/:userId", getUser); // Get one user

  // @route GET /api/v1/users/
  // desc get all users from database
  // access Public
  app.get("/api/v1/users", getUsers); // Get all users

  // !Posts Routes

  // @route GET /api/v1/:userId/post/postId
  // desc get one post  from a specific user according to post and user ID's
  // access Private
  app.get("/api/v1/:userId/post/:postId", getPost); // Get one post

  // @route GET /api/v1/:userId/posts
  // desc get all the user posts
  // access Private
  app.get("/api/v1/:userId/posts", getPosts); // Get all user posts

  // @route PATCH /api/v1/:userId/post/create
  // desc create a post
  // access Private
  app.patch("/api/v1/:userId/post/create", createPost); // Create a post

  // @route PATCH /api/v1/:userId/post/:postId/edit
  // desc edit the post according to the post id
  // access Private
  app.patch("/api/v1/:userId/post/:postId/edit", editPost); // Edit a post

  // @route PATCH /api/v1/:userId/post/:postId/delete
  // desc delete the post according to the post id
  // access Public
  app.patch("/api/v1/:userId/post/:postId/delete", deletePost); // Delete a post

  return app.use("/", router);
};

export default routes;
