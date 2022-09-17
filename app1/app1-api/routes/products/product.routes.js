const router = require("express").Router();
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

module.exports = router;
