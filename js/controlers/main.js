import { serviceProducts } from "../service/product-service.js";
import { errorInput } from "./errorInput.js";


const containerProduct = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]")
const botonBorrar = document.querySelector("[data-boton-borrar]")

function createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="image_container">
        <img src="${image}"
        alt="${name}" class="img_card" />
    </div>
    <div class="container_card">
        <h2 class="nombre_producto_card">${name}</h2>
        <div class="info_card">
            <p class="precio_card">S/${price}</p>
            <button type="button" class="card_eliminar" data-id="${id}">
                <img src="./imagenes/eliminar.png" alt="" class="icon_eliminar_card" />
            </button>

        </div>
    </div>`;


    const deleteProduct = card.querySelector(".card_eliminar");
    deleteProduct.addEventListener("click", (e) => {
        e.preventDefault()
        serviceProducts.deleteProduct(id)
            .then(() => {
                card.remove();
            })
            .catch(err => console.log(err));
    });

    containerProduct.appendChild(card);
    return card

}
 

const render = async ()=>{
    try {
        const listProduct = await serviceProducts.productList()
        listProduct.forEach(product => {
            containerProduct.appendChild(
                createCard(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )
            )
            
        });

    } catch (error) {
        console.log(error);
    }
} 

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
  
    if(name.trim() ==="" || price.trim() === "" || image.trim() === ""){
      alert("Por favor complete todos los formularios")
      return;
    }

    serviceProducts
    .createProduct(name,price,image)
    .then((res) => res.json.stringify())
    .catch((error) => console.log("aca esta el error",error))

    

    
})




render()