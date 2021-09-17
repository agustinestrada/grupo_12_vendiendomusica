window.addEventListener('load',()=>{

    
    const form = document.querySelector("form.main-formulario")
    const inputName = form.querySelector('.nombree')
    const inputLastName = form.querySelector('.apellidoo')
    const inputEmail = form.querySelector('.emaill')
    const inputPassword = form.querySelector('.passwordd')
    const inputConfirmation = form.querySelector('.password2')


    const errorName = form.querySelector('.msg-error-nombre')
    const errorLastName = form.querySelector('.msg-error-apellido')
    const errorEmail = form.querySelector('.msg-error-email')
    const errorPassword = form.querySelector('.msg-error-password')
    const errorConfirmation = form.querySelector('.msg-error-password2')


    let hasErrors = false


    function validarCorreo(a){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return expReg.test(a.value) 
    }


    form.addEventListener('submit', (e) => {


        if (inputName.value.length < 2){
            
            
            hasErrors = true
            
            errorName.innerHTML = "a Por favor igrese su Nombre"
            inputName.focus()
        
        
        }

            
        if (inputLastName.value.length < 2){
                

                errorLastName.innerHTML = "Por favor ingrese su apellido"

                if(!hasErrors){
                
                    inputLastName.focus()
                    
                }
                hasErrors = true
            }
            
        if (!validarCorreo(inputEmail)){
                
                errorEmail.innerHTML = "a Por favor ingrese un email valido"
                
                if(!hasErrors){
                
                    inputEmail.focus()
                    
                }
                hasErrors = true

            }

        if (inputPassword.value.length < 7){
            
            errorPassword.innerHTML = "a Las contraseñas debe tener 8 caracteres como minimo"

            if(!hasErrors){
            
                inputPassword.focus()
                
            }

            hasErrors = true
            
        }


        if (inputConfirmation.value != inputPassword.value){

            errorConfirmation.innerHTML = "a Las contraseñas no coinciden"
            if(!hasErrors){
            
                inputConfirmation.focus()
                
            }
            hasErrors = true
        
        }

        if (hasErrors){
            e.preventDefault()
        }


    })

})
