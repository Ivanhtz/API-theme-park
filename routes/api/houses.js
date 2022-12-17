const router = require("express").Router();
const House = require("../../models/house.model");

router.get("/", async (req, res) => {
  try {
    const house = await House.find();

    if (!house) res.json({ error: "No existe ninguna casa" });

    res.json(house);
  } catch (error) {
    res.json({ error: "No existe ninguna casa" });
  }
});

module.exports = router;
