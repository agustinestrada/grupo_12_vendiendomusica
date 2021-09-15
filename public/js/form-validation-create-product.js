//Guardo mi formulario en una variable
const form = document.querySelector("#form-create")
const inputName = form.querySelector('#name')
const inputPrice = form.querySelector('#price')
const inputCategoria = form.querySelector('#categoria')
const inputDescripcion = form.querySelector('#descripcion')
const inputImage = form.querySelector('#producttImage')


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


form.addEventListener('submit', (e) => {
    
   // let hasErrors = false
    
    

    //if (hasErrors){
    e.preventDefault()
   // }



})

/*
    if (inputName.value.length < 3){
        
        
        hasErrors = true
        
        errorName.innerHTML = "a Ingrese el nombre del producto"
        inputName.focus()
      
       
    }
    */
/*
    
    if (!isNumeric(inputPrice.value) || (inputPrice.value < 0)){
        
        errorPrice.innerHTML = "a Ingrese un valor mayor a 0"

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
    
    
})
*/
