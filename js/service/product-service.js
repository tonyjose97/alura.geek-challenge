
const UrlAPI = ("http://localhost:3000/products")

//consumimos la api mediante fecth, then para obtener una respuesta y el catch para captar un error
const productList = ()=>{
    return fetch(UrlAPI)
    .then((res) =>res.json())
    .catch((err) => console.log(err));
}

// este es el metodo post pare crear un elemento
const createProduct =  (name,price,image,)=>{
    return  fetch (UrlAPI,{
        method:"POST",
        headers:{
            "Content-Type": "aplication/json",

        },
        body: JSON.stringify({
            name,
            image,
            price
    })
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

//metodo para eliominar un elemento mediante un id
 const  deleteProduct = (id) =>{
    return  fetch(`http://localhost:3000/products/${id}`,{
        method: "DELETE",

    })
    .then((res)=>{res.json()} )
    .catch((err) => console.log("error de red",err))
}

export const serviceProducts={ //esta es la variable que llamammos al exportar
    productList,createProduct,deleteProduct
}