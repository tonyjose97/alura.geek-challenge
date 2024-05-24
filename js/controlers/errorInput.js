const name = document.querySelector("[data-name]").value;
const price = document.querySelector("[data-price]").value;
const image = document.querySelector("[data-image]").value;


function errorInputs(e) {
    
    const messageErrorName = document.querySelector(".error_name")
    const messageErrorPrice = document.querySelector(".error_price")    
    const messageErrorImg = document.querySelector(".error_image")


    if (name.trim() === '' || price.trim() === "" ){
        messageErrorName.textContent= "Por favor ingresar un nombre para el producto."
    } 
     if(price.trim() === ''){
        messageErrorPrice.textContent = "Por favor ingrese un monto para el producto"

    }if(image.trim() === '') {
        messageErrorImg.textContent = "Por favor ingrese una URL para el producto"
        }

        
    return alert("Complete los campos del formulario")

}

export const errorInput ={
    errorInputs
}


