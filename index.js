const express = require("express");
const connectDb = require("./config/db");
// const cors = require("cors");

// initialize app
const app = express();

// connect to database
connectDb();

// middleware
app.use(express.json({ extended: false }));
// app.use(cors);

const temps = require("./routes/api/temps");

app.use("/api/temps", temps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
