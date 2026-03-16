const Category = require("../models/category.model");

exports.getAll = async (req, res) => {
  const categories = await Category.find();

  res.json(categories);
};

exports.getById = async (req, res) => {
  const category = await Category.findById(req.params.id);

  res.json(category);
};

exports.create = async (req, res) => {
  const imagePath = req.file ? req.file.filename : null;

  const category = await Category.create({
    name: req.body.name,
    description: req.body.description,
    image: imagePath,
  });

  res.json(category);
};

exports.update = async (req, res) => {
  const updates = { ...req.body };
  if (req.file) updates.image = req.file.filename;

  const category = await Category.findByIdAndUpdate(req.params.id, updates, {
    new: true,
  });

  res.json(category);
};

exports.delete = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);

  res.json({ message: "Category deleted" });
};
