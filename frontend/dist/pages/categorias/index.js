import { getCategories, nuevaCategoria, deleteCategory, obtenerCategory, editarCategory } from "./API.js";

let tablaC = document.querySelector("#tablaCategoria");
document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias();
}); 
async function cargarCategorias(){
    let categorias = await getCategories();
    categorias.forEach(element => {
        let plantilla = `
        <tr>
        <td>${element.id_categoria}</td>
        <td>${element.nombre_categoria}</td>
        <td>${element.descripcion_categoria}</td>
        <td>${element.img_categoria}</td>
        <td><a class="btn btn-warning update" id=${element.id_categoria} data-bs-toggle="modal"data-bs-target="#updateCategory">Editar</a></td>
        <td><button class="btn btn-danger delete" id="${element.id_categoria}">Eliminar</button></td>
    </tr>
    `;
    tablaC.innerHTML+=plantilla; 
    });
}

let formulario = document.getElementById("addCateg");
formulario.addEventListener('submit',newCategory);

function newCategory(e){
    e.preventDefault();
    let nombre_categoria = document.querySelector("#categoria_nombre").value;
    let descripcion_categoria = document.querySelector("#categoria_descripcion").value;
    let img_categoria = document.querySelector("#categoria_imagen").value;
    
    let registro={
        nombre_categoria,
        descripcion_categoria,
        img_categoria
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevaCategoria(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

let eliminar = document.querySelector("#tablaCategoria");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        let id = e.target.getAttribute('id')
        let confirmar = confirm("Conirmar eliminacion")
        if(confirmar){
            deleteCategory(id);
        }
    } else if(e.target.classList.contains('update')){
        let id = e.target.getAttribute('id');
        obtenerCategoria(id);
    }
}


let obtenerCategoria = async (id)=>{
    let data = await obtenerCategory(id);
    let {nombre_categoria, descripcion_categoria, img_categoria} = data[0];
    console.log(data[0]);
    let nombre = document.querySelector("#categoriaNombreUpdate");
    nombre.setAttribute("placeholder",nombre_categoria);
    nombre.setAttribute("idCate",id);
    let descripcion = document.querySelector("#descripcionUpdate");
    descripcion.setAttribute("placeholder",descripcion_categoria);
    let imagen = document.querySelector("#imagenUpdate");
    imagen.setAttribute("placeholder",img_categoria);
}
let updateFormulario = document.querySelector("#actuForm");
updateFormulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    updateCategoria();
})
function updateCategoria(){
    let nombre = document.querySelector("#actuNomb");
    let id = parseInt(nombre.getAttribute('idCate'));
    let CategoriaNombre = document.querySelector("#actuNomb").value;
    let descripcion = document.querySelector("#actuDesc").value;
    let imagen = document.querySelector("#actuImg").value;
    let categoria = {
        nombre_categoria: CategoriaNombre,
        descripcion_categoria: descripcion,
        img_categoria: imagen
    }
    if(validation(categoria)){
        alert("Todos los datos son obligatorios");
    } return editarCategory(categoria,id);
}