import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import category from "./routes/category.js";
import pet from "./routes/pet.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/category", category);

app.use("/api/pets", pet);

const PORT = 4000;
mongoose
  .connect(
    "mongodb+srv://priyankau7081:Pet123@cluster0.uqbmodq.mongodb.net/Pet_World"
  )
  .then(() => console.log("Database connected "))
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log("App is running on PORT 4000");
});
