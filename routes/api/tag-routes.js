const tagRouter = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

tagRouter.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: { model: Product, through: ProductTag },
    });
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

tagRouter.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: { model: Product, through: ProductTag },
    });
    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

tagRouter.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

tagRouter.put("/:id", async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedTag[0]) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json({ message: "Tag updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

tagRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json({ message: "Tag deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = tagRouter;