const { Router } = require("express");

const indexRouter = Router();

authorRouter.get("/", (req, res) => res.send("All books"));
authorRouter.get("/:indexId", (req, res) => {
    const { indexId } = req.params;
    res.send(`Index ID: ${indexId}`);
});

module.exports = indexRouter;