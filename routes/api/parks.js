const router = require("express").Router();
const Park = require("../../models/park.model");

router.get("/", async (req, res) => {
  try {
    const park = await Park.find();

    if (!park) res.json({ error: "No existen parques" });

    res.json(park);
  } catch (error) {
    res.json({ error: "No existen parques" });
  }
});

module.exports = router;
