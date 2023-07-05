import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import constructorasRoutes from "./routes/constructoras.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import cors from "cors";
const app = express();
app.set("port", 5000);
const corsOption={
    methods: ["GET","POST","PUT","DELETE"],
}   
app.use(express.json());
app.use(cors(corsOption));
app.use("/api/categorias", categoriasRoutes);
app.use("/api/constructoras", constructorasRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/productos", productosRoutes);
export default app;