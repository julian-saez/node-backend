const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET as string | '';

const requireAuth = (req: any, res: any, next: any) => {
  const token = req.cookies.jwt;
  
  if (token) {
    jwt.verify(token, JWT_SECRET, ( err: any ) => {
      if (err) {
        res.status(403);
        res.send("You need to sign in to this content!");
      } else {
        next();
      }
    });
  } else {
    res.status(403);
    res.send("You need to sign in to this content!");
  }
};

module.exports = { requireAuth };
