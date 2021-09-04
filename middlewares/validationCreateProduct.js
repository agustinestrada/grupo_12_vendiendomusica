const { body } = require('express-validator')
const path = require('path')

const validationCreateProduct = [
    body('name')
    .notEmpty()
    .withMessage('Por favor ingrese el nombre del producto')
    .bail()
    .isLength({min: 5})
    .withMessage('El nombre debe tener un minimo de 5 caracateres'),

    body('precio')
    .notEmpty()
    .withMessage('Por favor ingrese el precio del producto') 
    .bail()
    .isNumber()
    .withMessage('El valor debe ser expresado en numeros'),
    
    body('categoria')
    .notEmpty()
    .withMessage('Por favor elija una categoria'),
    //.bail()
    //ver como puedo checkear dentro de las categorias que tengo
    body('imagen')
    .custom((value, { req }) => {
        const { file } = req
        //cuequea que haya cargado una imagen
        if (!file) {
                
        throw new Error('Seleccione un archivo')
        }
        //cuequea que la extension sea la correcta
        
        const AVIABLE_EXTENSIONS = ['.jpg', '.jpeg', '.gif', '.png']
        const extension = path.extname(file.originalname)
        
        if (!AVIABLE_EXTENSIONS.includes(extension)){ 
            throw new Error ('Las extensiones soportadas son : .jpg, .jpeg, .gif, o .png')
        }

        return true

    }),
    body('descripcion')
    .notEmpty()
    .withMessage('Por favor ingrese una descripcion del producto')
    .bail()
    .isLength({max: 4000})
    .withMessage('El maximo de caracteres permitido para la descripcion es de 4000')
]

module.exports = validationCreateProduct