const mongoose = require("mongoose") 

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
) 

const Category = mongoose.model("Category", categorySchema) 

exports.Category = Category 
exports.categorySchema = categorySchema 
