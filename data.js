const mongoose = require("mongoose");

const displayDataSchema = new mongoose.Schema({ 
  data: {
    type: String,
    required: true,
  },
});

mongoose.model("displayData", displayDataSchema);
