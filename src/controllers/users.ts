const UserModel = require('../models/users');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET as string | '';


const maxAge = 3 * 24 * 60 * 60;

const createToken = (id: string) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: maxAge
  });
};

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

export const register = async ( req: any, res: any ) => {
    const { email, password } = req.body;
    if( !email || !password ) res.send("Faltan datos");

    try { 
        const data = await UserModel.create({
            email: email,
            password: password
        });
        const token = createToken(data._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

        res.send({ data: data })
    } catch ( err ) {
        res.send( {
            message: "mensaje de error",
        } );
    } 
}

export const login = async ( req: any, res: any ) => {
    const { email, password } = req.body;

    if( !email || !password ) res.send("Faltan datos");

    try{
        const data = await UserModel.findOne({ email: email });
        const token = createToken(data._id);
        res.cookie('jwt', token, { maxAge: maxAge * 1000 });
        
        res.send(data);
    } catch( err ) {
        res.send( "Ha ocurrido un error:", err );
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
