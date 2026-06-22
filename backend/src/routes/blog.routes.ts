import { Router } from 'express';
import { jwtMiddleware } from '../middleware/jwt.middleware';
import { adminMiddleware } from '../middleware/admin.middleware';
import blogs from '../controllers/blog.controller';

const routes = Router();

// Hent alle blogs
routes.get('/', jwtMiddleware, blogs.getAllBlogs);

// hent blog
routes.get('/:id', jwtMiddleware, blogs.getBlog);

// Opret blog admin only
routes.post('/', jwtMiddleware, adminMiddleware, blogs.createBlog);

// Opdater blog admin only
routes.put('/:id', jwtMiddleware, adminMiddleware, blogs.updateBlog);

// Slet blog admin only
routes.delete('/:id', jwtMiddleware, adminMiddleware, blogs.deleteBlog);


export default routes;