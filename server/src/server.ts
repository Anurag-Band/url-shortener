import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl.route";
import { getUrl } from "./controller/shortUrl.controller";
dotenv.config();
connectDb();

const PORT = process.env.PORT || 5001;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: FRONTEND_URL,
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
