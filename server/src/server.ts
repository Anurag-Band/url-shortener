import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import urlRoutes from "./routes/shortUrl.route";
import { getUrl } from "./controller/shortUrl.controller";
dotenv.config();
connectDb();

const PORT = process.env.PORT || 5001;
// const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  console.log("server is running");
  res.send("server is running");
});

// custom route for redircting user
app.get("/:id", getUrl);

// others routes
app.use("/api", urlRoutes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
