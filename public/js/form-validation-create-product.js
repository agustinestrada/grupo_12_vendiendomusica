window.addEventListener('load',()=>{

    
    //Guardo mi formulario en una variable
    const form = document.querySelector("#form-create")
    const inputName = form.querySelector('.nombre')
    const inputPrice = form.querySelector('.precio')
    const inputCategoria = form.querySelector('.categoria')
    const inputDescripcion = form.querySelector('.descripcion')
    const inputImage = form.querySelector('#productImage')


    const errorName = form.querySelector('.msg-error-nombre')
    const errorPrice = form.querySelector('.msg-error-precio')
    const errorCategoria = form.querySelector('.msg-error-categoria')
    const errorDescripcion = form.querySelector('.msg-error-descripcion')
    const errorImage = form.querySelector('.msg-error-image')


    function isNumeric(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    let hasErrors = false

    form.addEventListener('submit', (e) => {

        console.log(inputImage)
            
            
        if (inputName.value.length < 3){
            
            
            hasErrors = true
            
            errorName.innerHTML = "a Ingrese el nombre del producto"
            inputName.focus()
        
        
        }

            
        if (inputPrice.value <= 0 || inputPrice == null || inputPrice == undefined ){
                
                errorPrice.innerHTML = "a Ingrese un valor mayor a 0"

                if(!hasErrors){
                
                    inputPrice.focus()
                    
                }
                hasErrors = true
            }
        
            
        if (!inputCategoria.value.length > 0){
                
                errorCategoria.innerHTML = "a Por favor ingrese la categoria"
                
                if(!hasErrors){
                
                    inputCategoria.focus()
                    
                }
                hasErrors = true

            }

        if (inputDescripcion.value.length <= 0 || inputDescripcion.value.length > 4000){
            
            errorDescripcion.innerHTML = "a Debe ingresar la descripcion del producto. Con un maximo de 4000 caracateres"

            if(!hasErrors){
            
                inputDescripcion.focus()
                
            }

            hasErrors = true
            
        }


        if (!inputImage.value){

            errorImage.innerHTML = "Debe seleccionar una imagen"
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
