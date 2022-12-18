const router = require("express").Router();
const Roller = require("../../models/roller.model");

// todas las montañas
router.get("/", async (req, res) => {
  try {
    const roller = await Roller.find();

    if (!roller) res.json({ error: "No existen Montañas Rusas" });

    res.json(roller);
  } catch (error) {
    res.json({ error: "No existen Montañas Rusas" });
  }
});

// montaña por id
router.get("/:rollerId", async (req, res) => {
  const { rollerId } = req.params;

  try {
    let roller = await Roller.findById(rollerId);

    if (!roller) return res.json(400).json({ error: "No existe la montaña" });

    res.json(roller);
  } catch (err) {
    res.status(400).json({ error: "No existe la montaña" });
  }
});

module.exports = router;
