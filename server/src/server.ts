import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl.route";
import { getUrl } from "./controller/shortUrl.controller";
dotenv.config();
connectDb();

const PORT = process.env.PORT || 5001;

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// custom route for redircting user
app.get("/:id", getUrl);

// others routes
app.use("/api/", shortUrl);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
