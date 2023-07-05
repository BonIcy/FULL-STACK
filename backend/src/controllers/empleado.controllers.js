import getConnection from "../db/database.js";

let getEmpleados = async (req, res) => {
  try {
    let connection = await getConnection();
    let result = await connection.query(
      "SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado FROM empleados"
    );
    console.log(result);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

let addEmpleados = async(req, res) =>{
  try {
    let {nombre_empleado,email_empleado,celular_empleado,password_empleado} = req.body;
    let empleado = {nombre_empleado, email_empleado,celular_empleado,password_empleado};
    let connection = await getConnection();
    let result = await connection.query("INSERT INTO empleados SET ?", empleado);
    res.json(result);
    return result;
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export let methodsHTTP = {
  getEmpleados,
  addEmpleados
};