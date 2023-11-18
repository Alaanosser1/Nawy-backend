import express from "express";
import mongoose from "mongoose";
import apartmentRoutes from "../src/routes/apartments.route";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://nosseralaa7:wAhcvQpt0LQ0Nz1q@cluster0.nqs8bq6.mongodb.net/"
);
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use("/apartments", apartmentRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
