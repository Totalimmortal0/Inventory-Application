const express = require("express");
const app = express();
const aircraftRouter = require("./routes/aircraftRouter");
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello world")
});

app.use("/aircrafts", aircraftRouter);

app.listen(port, () => {
    console.log(`starting server listening on port ${port}`)
});