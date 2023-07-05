import getConnection from "../db/database.js";
let getCategorias = async (req, res) => {
  try {
    let connection = await getConnection(); 
    let result = await connection.query(
      "SELECT * FROM categorias"
    );
    console.log(result);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
let addCategorias = async(req, res) =>{
  try {s
    let {nombre_categoria,descripcion_categoria, img_categoria} = req.body;
    let category = {nombre_categoria, descripcion_categoria, img_categoria};
    let connection = await getConnection();
    let result = await connection.query("INSERT INTO categorias SET ?", category);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
let getCategoria = async (req, res)=>{
  try {
      let {id} = req.params
      let connection = await getConnection();
      let result = await connection.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias WHERE id_categoria = ?",id );
      console.log(result);
      res.json(result);
      return result;
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
     
} 
let deleteCategoria = async (req, res)=>{
  try {
      let {id} = req.params
      let connection = await getConnection();
      let result = await connection.query("DELETE FROM categorias WHERE id_categoria = ?",id);
      console.log(result);
      res.json(result); 
      return result;
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
     
} 
let updateCategorias = async (req, res)=>{
  try {
      let {id} = req.params;
      let {nombre_categoria,descripcion_categoria,img_categoria} = req.body;

      let category = { nombre_categoria, descripcion_categoria, img_categoria }

      let connection = await getConnection();
      
      let result = await connection.query("UPDATE categorias SET ? WHERE id_categoria = ?", [category, id]);

      res.json(result);
      return result;
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
}
export let methodsHTTP = {
  getCategorias,
  addCategorias,
  getCategoria,
  deleteCategoria,
  updateCategorias
};