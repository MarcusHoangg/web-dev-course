const express = require("express");
const connectDB = require("./config/db");
const carRouter = require("./routes/carRouter");

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => res.send("API Running!"));

app.use("/api/cars", carRouter);

// optional: 404
app.use((req, res) => res.status(404).json({ message: "Endpoint not found" }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
