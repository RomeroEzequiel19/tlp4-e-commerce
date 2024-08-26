import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productos.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.post("/product/create", createProduct);
router.post("/product/update", updateProduct);
router.post("/product/delete", deleteProduct);

export default router;
