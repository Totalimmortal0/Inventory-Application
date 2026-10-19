const express = require("express");
const app = express();
const aircraftRouter = require("./routes/aircraftRouter");
const manufacturerRouter = require("./routes/manufacturerRouter");

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/aircrafts", aircraftRouter);
app.use("/manufacturer", manufacturerRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`starting server listening on port ${port}`);
});