const productRouter = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category },
        { model: Tag, through: ProductTag },
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

productRouter.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        { model: Category },
        { model: Tag, through: ProductTag },
      ],
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

productRouter.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

productRouter.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedProduct[0]) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = productRouter;
