import mongoose from "mongoose";

const db = (URI) => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database has been connected"))
    .catch((err) => console.log(err));
};

export default db;
