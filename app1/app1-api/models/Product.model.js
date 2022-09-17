const { Schema, model } = require("mongoose");


const productSchema = new Schema(
  {
   name: String,
   price: Number,
   description: String,
   inStock: Boolean,
   imgSrc: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
