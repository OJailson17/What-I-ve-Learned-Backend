import express from "express";
import methodOverride from 'method-override'
import cors from 'cors'

import config from "./config/index.js";
import db from "./database/db.js";
import routes from "./routes/index.js";

const app = express();
const { MONGODB_URI } = config;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(cors({origin: "https://what-i-ve-learned-frontend.herokuapp.com/"}))

routes(app);
db(MONGODB_URI);

// Port setup
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server is running on port ${port}`));
