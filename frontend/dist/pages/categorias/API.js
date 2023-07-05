let url = "http://localhost:5000/api/categorias/";
export let getCategories = async () => {
    try {
        let categorias = await fetch(url);
        let datosCategorias = categorias.json();
        return datosCategorias;
    } catch (error) {
        console.log(error);
    }
}
export let nuevaCategoria = async (categoria) => {
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(categoria),
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
}
export let deleteCategory = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
}
export let obtenerCategory = async (id) => {
    try {
        let CategoryId = await fetch(`${url}/${id}`);
        let result = await CategoryId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
}
export let editarCategory = async (category,id) => {
    try {
        await fetch(`${url}/${id}`,{
          method: 'PUT',
          body: JSON.stringify(category),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      location.reload();
      } catch (error) {
        console.log(error);
      }
}