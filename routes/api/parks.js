const router = require("express").Router();
const Park = require("../../models/park.model");

// tods los parques
router.get("/", async (req, res) => {
  try {
    const park = await Park.find();

    if (!park) res.json({ error: "No existen parques" });

    res.json(park);
  } catch (error) {
    res.json({ error: "No existen parques" });
  }
});

// parque por id
router.get("/:parkId", async (req, res) => {
  const { parkId } = req.params;

  try {
    const park = await Park.findById(parkId);

    if (!park) return res.status(400).json({ error: "No existe el parque" });

    res.json(park);
  } catch (err) {
    res.status(400).json({ error: "No existe el parque" });
  }
});

module.exports = router;
