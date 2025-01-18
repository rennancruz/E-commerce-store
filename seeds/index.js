const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");
const seedProductTags = require("./product-tag-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced");

    await seedCategories();
    console.log("Categories seeded");

    await seedProducts();
    console.log("Products seeded");

    await seedTags();
    console.log("Tags seeded");

    await seedProductTags();
    console.log("ProductTags seeded");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed", error);
    process.exit(1);
  }
};

seedAll();