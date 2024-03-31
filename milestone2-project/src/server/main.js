import express from "express";
import ViteExpress from "vite-express";

//DEPENDENCIES
import methodOverride from 'method-override';
import mongoose from 'mongoose';


dotenv.config();
import dotenv from 'dotenv'
const PORT = process.env.PORT
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => console.log('connected to mongo: ', process.env.MONGO_URI)
).catch(err => console.error('Error connecting to MongoDB:', err.message));


app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);