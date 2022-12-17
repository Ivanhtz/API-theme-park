const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Conectado con MongoDB");
});
