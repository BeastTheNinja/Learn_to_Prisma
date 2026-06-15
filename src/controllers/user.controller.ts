import { prisma } from '../lib/prisma';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

class UserController {
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                },
            })
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    }

    async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    role: true,
                    createdAt: true
                }
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }

    async createUser(req: Request, res: Response) {

        console.log(req.body);

        const { firstName, lastName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(
            password,
            12
        );
        try {
            const newUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    role: 'USER',
                },
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { firstName, lastName, email, password, role } = req.body;
        try {
            const updatedUser = await prisma.user.update({
                where: { id: Number(id) },
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                    role,
                },
            });
            res.json(updatedUser);
            
        } catch (error) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await prisma.user.delete({
                where: { id: Number(id) },
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}

export default new UserController();