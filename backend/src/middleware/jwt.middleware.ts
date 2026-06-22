import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtUser } from "../types/jwt";

export const jwtMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.SECRET_KEY as string
        ) as JwtUser;

        req.user = decoded;

        next();
    } catch {
        return res.status(401).json({ error: "Invalid token" });
    }
};