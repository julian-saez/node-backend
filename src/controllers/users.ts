const UserModel = require('../models/users');

export const getAllUsers = async (_: any, res: any) => {
    try{
        const data = await UserModel.find({});

        res.send({ data: data })
    } catch( err ) {
        res.send( err );
    }
}

export const getUserById = async ( req: any, res: any ) => {
    const id = req.params.id;
    try{
        const data = await UserModel.findById( id );

        res.send({ data: data })
    } catch( err ) {
        res.send( err );
    }
}

export const createUser = async ( req: any, res: any ) => {
    const { email, password } = req.body;
    try { 
        const data = await UserModel.create({
            email: email,
            password: password
        });

        res.send({ data: data })
    } catch ( err ) {
        res.send( {
            message: "mensaje de error",
        } );
    } 
}

export const updateUserEmail = async ( req: { body: { email: string, currentEmail: string } }, res: any ) => {
    const { email, currentEmail } = req.body;
    try {
        const data = await UserModel.findOneAndUpdate({ email: currentEmail }, { email: email });
        res.send({ data: data })
    } catch( err ) {
        res.send( err );
    }
}

export const deleteUser = async (req: any, res: any) => {
    const { email } = req.body;
    try{
        const data = await UserModel.deleteOne( { email: email } );

        res.send({ data: data })
    } catch( err ) {
        res.send( err );
    }
}