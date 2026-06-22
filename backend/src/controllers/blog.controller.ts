import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { JwtUser } from "../types/jwt";

class BlogController {

    // Hent alle blogs
    async getAllBlogs(req: Request, res: Response) {
        try {
            const blogs = await prisma.blog.findMany({
                select: {
                    id: true,
                    title: true,
                    content: true,
                    author: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            email: true,
                        }
                    },
                    createdAt: true,
                }
            })
            res.json(blogs);
        }
        catch (error) {
            console.error("Error fetching blogs:", error);
            res.status(500).json({ message: "An error occurred while fetching blogs." });
        }

    }

    // Hent blog
    async getBlog(req: Request, res: Response) {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            return res.status(400).json({ message: "Invalid blog ID." });
        }
        try {
            const blog = await prisma.blog.findUnique({
                where: { id: Number(id) },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    author: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            email: true,
                        }
                    },
                    createdAt: true,
                }
            });
            if (!blog) {
                return res.status(404).json({ message: "Blog not found." });
            }
            res.json(blog);
        }
        catch (error) {
            console.error("Error fetching blog:", error);
            res.status(500).json({ message: "An error occurred while fetching the blog." });
        }
    }

    // Opret blog admin only
    async createBlog(req: Request, res: Response) {
        const { title, content } = req.body;
        const user = req.user as JwtUser;
        const userId = user.userId;
        try {
            const newBlog = await prisma.blog.create({
                data: {
                    title,
                    content,
                    authorId: userId,
                },
            });
            res.status(201).json(newBlog);
        } catch (error) {
            console.error("Error creating blog:", error);
            res.status(500).json({ message: "An error occurred while creating the blog." });
        }
    }

    // Opdater blog admin only
    async updateBlog(req: Request, res: Response) {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            return res.status(400).json({ message: "Invalid blog ID." });
        }
        const { title, content } = req.body;
        try {
            const updatedBlog = await prisma.blog.update({
                where: { id: Number(id) },
                data: {
                    title,
                    content,
                    updatedAt: new Date(),
                },
            });
            res.json(updatedBlog);
        } catch (error) {
            console.error("Error updating blog:", error);
            res.status(500).json({ message: "An error occurred while updating the blog." });
        }
    }

    // Slet blog admin only
    async deleteBlog(req: Request, res: Response) {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            return res.status(400).json({ message: "Invalid blog ID." });
        }
        try {
            await prisma.blog.delete({
                where: { id: Number(id) },
            });
            res.status(204).send();
        } catch (error) {
            console.error("Error deleting blog:", error);
            res.status(500).json({ message: "An error occurred while deleting the blog." });
        }



    }
}


export default new BlogController();