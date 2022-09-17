const router = require("express").Router();
//Create Route
router.post("/", (req, res, next) => {
	Product.create(req.body)
		.then((productFromDb) => {
			console.log({ productFromDb });
			res.json({ success: true, product: productFromDb });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error getting Product from Database!",
				error: err,
			});
		});
});

//Read Route
router.get("/", (req, res, next) => {
	Product.find()
		.then((productsFromDb) => {
			console.log({ productsFromDb });
			res.json({ success: true, products: productsFromDb });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error getting list of Products!",
				error: err,
			});
		});
});

//Read Route
router.get("/:productId", (req, res, next) => {
	Product.findById(req.params.productId)
		.then((productFromDb) => {
			console.log({ productFromDb });
			res.json({ success: true, products: productsFromDb });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error getting Product from Database!",
				error: err,
			});
		});
});

//Update Route
router.put("/:productId", (req, res) => {
	Product.findByIdAndUpdate(req.params.productId, req.body, { new: true })
		.then((updatedProductfromDb) => {
			res.json({ success: true, product: updatedProductFromDb });
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error updating Product in Database!",
				error: err,
			});
		});
});

//Delete Route
router.delete("/:productId", (req, res) => {
	Product.findByIdAndRemove(req.params.productId)
		.then(() => {
			res.json({
				success: true,
				message: "Successfully Removed Product",
			});
		})
		.catch((err) => {
			res.json({
				success: false,
				message: "Error removing Product from Database!",
				error: err,
			});
		});
});

module.exports = router;
