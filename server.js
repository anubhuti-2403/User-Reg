const express = require("express");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

sequelize.sync().then(() => console.log("Database synchronized"));

app.listen(5000, () => console.log("Server running on port 5000"));
