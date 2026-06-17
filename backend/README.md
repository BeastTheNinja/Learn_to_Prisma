# Backend

The backend is built with Express, TypeScript, Prisma, and MySQL.

## Features

* REST API
* JWT Authentication
* User Registration
* User Login
* Password Hashing with bcrypt
* Role-Based Authorization
* Protected Routes
* CRUD Operations
* Prisma ORM

## Tech Stack

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* MySQL
* JWT
* bcrypt

## Environment Variables

Create a .env file:

```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
PORT=3000
SECRET_KEY=your_secret_key
```

## Installation

Install dependencies:

```bash
npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Start development server:

```bash
npm run dev
```

## Authentication

Protected routes require a JWT token:

```http
Authorization: Bearer <token>
```

## Roles

Supported roles:

* USER
* ADMIN

Admin-only endpoints are protected using role middleware.

## Status

🚧 Learning project in active development.
