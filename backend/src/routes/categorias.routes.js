import { Router } from "express";
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";
let router = Router();
router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.addCategorias);

router.get("/:id", categoriaController.getCategoria );

router.delete("/:id", categoriaController.deleteCategoria );

router.put("/:id", categoriaController.updateCategorias );

export default router;