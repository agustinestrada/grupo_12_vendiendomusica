const { REAL } = require("sequelize/types")

window.addEventListener('load',()=>{

    
//Guardo mi formulario en una variable
const form = document.querySelector("#form-create")

const inputName = form.querySelector('#name')
const inputPrice = form.querySelector('#price')
const inputCategoria = form.querySelector('#categoria')
const inputDescripcion = form.querySelector('#descripcion')
const inputImage = form.querySelector('#inputImage')

//Errores
const errorName = form.querySelector('.msg-error-name')
const errorPrice = form.querySelector('.msg-error-precio')
const errorCategoria = form.querySelector('.msg-error-categoria')
const errorDescripcion = form.querySelector('.msg-error-descripcion')
const errorImage = form.querySelector('.msg-error-image')


function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function resetErrors() {
    errorName = ""
    errorPrice = ""
    errorCategoria = ""
    errorDescripcion = ""
}

//Paro la ejecucion del formulario
form.addEventListener('submit', (e) => {

    let hasErrors = false

    resetErrors()

    //nombre
    if (!inputName.value.length > 3){
        hasErrors = true
        errorName.innerHTML = "Ingrese el nombre del producto"
        inputName.focus()
    }

    //precio
    if (!isNumeric(inputPrice.value) || inputPrice.value < 0){
        
        errorPrice.innerHTML = "Ingrese un valor mayor a 0"

        if(!hasErrors){
        
            inputPrice.focus()
            
        }
        hasErrors = true
    }
    if (!inputCategoria.value.length > 0){
        
        errorCategoria.innerHTML = "Por favor ingrese la categoria"
        if(!hasErrors){
        
            inputCategoria.focus()
            
        }
        hasErrors = true

    }
    if (inputDescripcion.value.length < 0 || inputDescripcion.length > 4000){
        
        errorDescripcion.innerHTML = "Debe ingresar la descripcion del producto. Con un maximo de 4000 caracateres"

        if(!hasErrors){
        
            inputDescripcion.focus()
            
        }
        hasErrors = true
        
    }
    if (!inputImage.value){

        errorDescripcion.innerHTML = "Debe seleccionar una imagen"
        if(!hasErrors){
        
            inputImage.focus()
            
        }
        hasErrors = true
    }
        
    if (hasErrors){
    e.preventDefault()
    }
})

})
