const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\nDatabase Synced\n");
  await seedCategories();
  console.log("\nCategories Seeded\n");
  await seedProducts();
  console.log("\nProducts Seeded\n");
  await seedTags();
  console.log("\nTags Seeded\n");
  await seedProductTags();
  console.log("\nProduct Tags Seeded\n");
  process.exit(0);
};

seedAll();