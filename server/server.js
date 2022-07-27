const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//router
const userRoutes = require("./routes/user.routes");
//initialized app
const app = express();

//middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/v1/api/user", userRoutes);
//database
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind("database error: "));
db.once("open", () => console.log("Connected to database"));

//app listening port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App is listening to port ${port} ...`));
