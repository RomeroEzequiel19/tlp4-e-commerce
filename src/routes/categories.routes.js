import { Router } from "express";
import {
  ctrlCreateCategory,
  ctrlDeleteCategory,
  ctrlGetAllCategory,
  ctrlUpdateCategory,
} from "../controllers/categories.controllers.js";

const routesCategories = new Router();

routesCategories.get("/category", ctrlGetAllCategory);
routesCategories.post("/category", ctrlCreateCategory);
routesCategories.put("/category/:id", ctrlUpdateCategory);
routesCategories.delete("/category/:id", ctrlDeleteCategory);

export default routesCategories;
