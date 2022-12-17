const router = require("express").Router();
const Roller = require("../../models/roller.model");

router.get("/", async (req, res) => {
  try {
    const roller = await Roller.find();

    if (!roller) res.json({ error: "No existen Montañas Rusas" });

    res.json(roller);
  } catch (error) {
    res.json({ error: "No existen Montañas Rusas" });
  }
});

module.exports = router;
