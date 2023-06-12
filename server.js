const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const cors = require("cors")
app.use(cors())
// Middleware and route setup

const taskRoutes = require("./routes/tasks")
const categoryRoutes = require("./routes/categories")



app.use(express.json())
app.use("/api/tasks", taskRoutes)
app.use("/api/categories", categoryRoutes)

mongoose.connect("mongodb+srv://akash:akash@cluster0.o8cde90.mongodb.net/taskmanagement?retryWrites=true&w=majority").
then(() => {
    console.log("DB connected Successfully");
}).catch((error) => {
    console.log(error);
});

app.listen(PORT, () => {
  console.log("Server is running");
});