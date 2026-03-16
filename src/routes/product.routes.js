const router = require("express").Router();
const controller = require("../controllers/product.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const upload = require("../middleware/upload.middleware");

router.get("/", controller.getAll);

router.get("/category/:categoryId", controller.getByCategory);

router.get("/:id", controller.getById);

router.post(
  "/",
  auth,
  role("admin"),
  upload.single("image"),
  controller.create
);
router.put("/:id", auth, role("admin"), upload.single("image"), controller.update);

router.delete("/:id", auth, role("admin"), controller.delete);

module.exports = router;