import getConnection from "../db/database.js";

let getProductos = async (req, res) => {
  try {
    let connection = await getConnection();
    let result = await connection.query(
      "SELECT id_producto, nombre_producto, precio_x_dia, stock_producto, categorias.nombre_categoria FROM productos INNER JOIN categorias ON productos.categoria_producto = categorias.id_categoria;"
    );
    console.log(result);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

let addProductos = async(req, res) =>{
  try {
    let {nombre_producto,precio_x_dia,stock_producto,categoria_producto} = req.body;
    let producto = {nombre_producto, precio_x_dia,stock_producto,categoria_producto};
    let connection = await getConnection();
    let result = await connection.query("INSERT INTO productos SET ?", producto);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export let methodsHTTP = {
  getProductos,
  addProductos
};