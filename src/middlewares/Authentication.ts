import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppError } from "../helper/AppError.js";
import { RequestWithUser } from "../protocols/RequestWithUser.js";

const secretKey = process.env.JWT_SECRET || 'defaultSecret';

export default class Authentication {

  static required(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) throw new AppError("Token inválido ou não enviado");
      const decode = jwt.verify(token, secretKey) as JwtPayload;
      if (decode.user) req.user = decode.user;

      return next();
    } catch (error) {
      throw new AppError("Token inválido ou não enviado", 401);
    }
  };
}