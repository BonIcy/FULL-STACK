import getConnection from "../db/database.js";

let getConstructoras = async (req, res) => {
  try {
    let connection = await getConnection();
    let result = await connection.query(
      "SELECT * FROM constructoras"
    );
    console.log(result);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

let addConstructoras = async(req, res) =>{
  try {
    let {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = req.body;
    let constructora = {nombre_constructora, nit_constructora,nombre_representante,email_contacto,telefono_contacto};
    let connection = await getConnection();
    let result = await connection.query("INSERT INTO constructoras SET ?", constructora);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export let methodsHTTP = {
  getConstructoras,
  addConstructoras
};