const { Product } = require("../models");

const productData = [
  { product_name: "T-Shirt", price: 14.99, stock: 14, category_id: 1 },
  { product_name: "Running Shoes", price: 90.0, stock: 25, category_id: 5 },
  { product_name: "Baseball Hat", price: 22.99, stock: 12, category_id: 4 },
  { product_name: "Soccer Ball", price: 12.99, stock: 50, category_id: 3 },
  { product_name: "Shorts", price: 29.99, stock: 22, category_id: 2 },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;