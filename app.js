const express = require("express");
const path = require("path");
const app = express();

const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs")

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))

const donerrouter=require("./routes/doner");
const reciverrouter=require("./routes/reciver");
const adminrouter=require("./routes/admin");

app.use("/doner",donerrouter)
app.use("/reciver",reciverrouter)
app.use("/admin",adminrouter)


app.listen(3000, () => {
    console.log("listening on port 3000");
})