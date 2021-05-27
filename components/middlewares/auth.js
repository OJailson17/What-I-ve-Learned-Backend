import jwt from "jsonwebtoken";
import config from "../../config/index.js";

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "No token privided" });
  } else {
    const token = authHeader.replace("Bearer ", "");

    jwt.verify(token, config.SECRET_HASH_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Invalid token" });
      } else {
        req.userId = decoded.id;
        return next();
      }
    });
  }
};
