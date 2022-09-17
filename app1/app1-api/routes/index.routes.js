const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require("./products/product.routes");

/* GET home page */
router.get("/", (req, res, next) => {
	res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/product", productRoutes);

module.exports = router;
