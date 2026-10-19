const { Router } = require("express");
const aircraft = require("../controllers/aircraftController")
const aircraftRouter = Router();

aircraftRouter.get("/", (req, res) => {
    // func to get aircraft from db
    res.send("Here be aircrafts");
});

aircraftRouter.post("/new", (req, res) => {
    // func to add new aircrafts to db
});

aircraftRouter.put("/update", (req, res) => {
    // func to update aircraft already in db
});

aircraftRouter.delete("/delete", (req, res) => {
    // func to delete aircraft already in db
});

module.exports = aircraftRouter;