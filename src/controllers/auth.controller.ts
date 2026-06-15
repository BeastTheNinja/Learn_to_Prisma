import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {

    register = async (
        req: Request,
        res: Response
    ) => {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already in use' });
        }
        const hashedPassword = await bcrypt.hash(
            password,
            12

        );

        const user = await prisma.user.create({

            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role: 'USER'
            }
        });
        res.status(201).json({ message: 'User registered successfully', user });
    }

    login = async (
        req: Request,
        res: Response
    ) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Missing email or password"
            });
        }

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({
                error: "Invalid Credentials"
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                error: "Invalid Credentials"
            });
        }
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                role: user.role
            },
            process.env.SECRET_KEY as string,
            {
                expiresIn: "1h"
            }
        )

        return res.status(200).json({
            message: "Login successful",
            token
        });
    }


}

export default new AuthController();