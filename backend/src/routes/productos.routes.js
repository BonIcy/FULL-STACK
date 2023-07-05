import { Router } from "express";
import { methodsHTTP as productosRoutes } from "../controllers/producto.controllers.js";

let router = Router();

router.get("/", productosRoutes.getProductos);
router.post("/", productosRoutes.addProductos);
export default router;