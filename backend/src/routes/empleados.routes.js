import { Router } from "express";
import { methodsHTTP as empleadosRoutes } from "../controllers/empleado.controllers.js";

let router = Router();

router.get("/", empleadosRoutes.getEmpleados);
router.post("/", empleadosRoutes.addEmpleados);

export default router;