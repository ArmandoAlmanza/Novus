import { Router } from "express";

const router = Router();

// get products
router.get("/products", (req, res) => {
    res.send("getting all products");
});

// get one product
router.get("/products/:id", (req, res) => {
    res.send("getting a product");
});

// add a new product

router.put("/products", (req, res) => {
    res.send("add");
});

// delete a product

router.delete("/products/:id", (req, res) => {
    res.send("Delete");
});

// update a product

router.put("/products/:id", (req, res) => {
    res.send("Delete");
});

export default router;
