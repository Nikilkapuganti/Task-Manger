import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';


export interface AuthenticatedRequest extends Request {
  user?: JwtPayload | null; 
}
//Here we can use any thing for check authorization like session cookie etc
function authenticateJWT(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.SECRET_KEY || '', (err, decoded:any) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = decoded || null;
    next();
  });
}

export { authenticateJWT };