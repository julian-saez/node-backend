const userModel = require('../models/users');


export const getItems = (_: any, res: any) => {
    res.send( 'Hola' );
}

export const createUser = async ( req: any, res: any ) => {
    const {email, password } = req.body;
    try { 
        const response = await userModel.create({
            email: email,
            password: password
        });

        res.send({ message: "se ha creado correctamente", result: response, body: req.body })
    } catch ( err ) {
        console.log( err )
        res.send( {
            message: "mensaje de error",
        } );
    } 
}
// const createItem = () => {

// }

// const updateItem = () => {

// }

// const deleteItem = () => {

// }