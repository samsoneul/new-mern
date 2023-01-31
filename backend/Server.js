const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const Task = require("./models/taskmodel");
const taskRoutes=require("./Routes/Taskrouter")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks",taskRoutes)

connectDB();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

// mongodb+srv://Samson:<password>@cluster0.u0oeo.mongodb.net/?retryWrites=true&w=majority
