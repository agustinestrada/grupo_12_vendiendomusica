window.addEventListener('load',()=>{

    
    const form = document.querySelector("form.main-formulario")
    const inputEmail = form.querySelector('.emaill')
    const inputPassword = form.querySelector('.passwordd')

    const errorEmail = form.querySelector('.msg-error-email')
    const errorPassword = form.querySelector('.msg-error-password')



    let hasErrors = false


    function validarCorreo(a){
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return expReg.test(a.value) 
    }


    form.addEventListener('submit', (e) => {


            
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

        if (hasErrors){
            e.preventDefault()
        }


    })

})
