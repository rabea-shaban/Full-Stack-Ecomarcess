const Product = require("../models/product.model");

exports.getAll = async (req, res) => {
  const products = await Product.find()
    .populate("categoryId")
    .populate("createdBy");

  res.json(products);
};

exports.getById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.json(product);
};

exports.getByCategory = async (req, res) => {
  const products = await Product.find({
    categoryId: req.params.categoryId,
  });

  res.json(products);
};

exports.create = async (req, res) => {
  const imagePath = req.file ? req.file.filename : null;

  const product = await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    categoryId: req.body.categoryId,
    createdBy: req.user.id,
    image: imagePath,
  });

  res.json(product);
};

exports.update = async (req, res) => {
  const updates = { ...req.body };
  if (req.file) updates.image = req.file.filename;

  const product = await Product.findByIdAndUpdate(req.params.id, updates, {
    new: true,
  });

  res.json(product);
};

exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.json({ message: "Product deleted" });
};
