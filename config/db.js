const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Conectado con MongoDB");
});
