const { Router } = require("express");
const manufacturer = require("../controllers/manufacturerController");
const manufacturerRouter = Router();

manufacturerRouter.get("/", (req, res) => {
    // func to get manufacturer from db
    res.send("Here be manufacturers");
});

manufacturerRouter.post("/new", (req, res) => {
    // func to add new manufacturer to db
});

manufacturerRouter.put("/update", (req, res) => {
    // func to update manufacturer already in db
});

manufacturerRouter.delete("/delete", (req, res) => {
    // func to delete manufacturer already in db
});

module.exports = manufacturerRouter;