const mongoose = require("mongoose");
 
const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
 
module.exports = new mongoose.model("task", taskSchema);