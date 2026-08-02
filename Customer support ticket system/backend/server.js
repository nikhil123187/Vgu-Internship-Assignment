console.log("SERVER FILE RUNNING");

console.log(__dirname);

const ticketRoutes = require("./routes/ticketRoutes");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes=require("./routes/userRoutes");



// app.post("/api/users/register", (req, res) => {
//     console.log(req.body);
//     res.json({
//         message: "Direct Route Working"
//     });
// });
app.use("/api/users",userRoutes);
app.use("/api/tickets", ticketRoutes);

app.get("/", (req, res) => {
    res.send("Customer Support Ticket System Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running on Port ${PORT}`);
});
