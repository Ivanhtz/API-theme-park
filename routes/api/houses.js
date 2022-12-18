const router = require("express").Router();
const House = require("../../models/house.model");

// todas las casas
router.get("/", async (req, res) => {
  try {
    const house = await House.find();

    if (!house) res.json({ error: "No existe ninguna casa" });

    res.json(house);
  } catch (error) {
    res.json({ error: "No existe ninguna casa" });
  }
});

// casa por id
router.get("/:houseId", async (req, res) => {
  const { houseId } = req.params;

  try {
    let house = await House.findById(houseId);

    if (!house) return res.json({ error: "El pasaje no existe" });

    res.json(house);
  } catch (err) {
    res.status(400).json({ error: "El pasaje no existe" });
  }
});

module.exports = router;
