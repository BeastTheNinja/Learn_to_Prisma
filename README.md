# Learn to Prisma

A personal learning project where I explore how to use Prisma ORM with a Node.js and TypeScript backend.

The goal of this project is to learn how to:

- Design database schemas with Prisma
- Connect Prisma to a MySQL database
- Create and manage migrations
- Build REST APIs with Express
- Implement user authentication and authorization
- Structure a backend application using TypeScript

## Tech Stack

- TypeScript
- Node.js
- Express.js
- Prisma ORM
- MySQL
- HeidiSQL (database management)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/BeastTheNinja/Learn_to_Prisma.git
cd Learn_to_Prisma
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file based on `.env.example`.

Example:

```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
PORT=3000
JWT_SECRET=your_secret_key
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run database migrations

```bash
npx prisma migrate dev
```

### Start the development server

```bash
npm run dev
```

## Database

This project uses:

- MySQL as the database
- Prisma as the ORM
- HeidiSQL as the database management tool

## Project Goals

This repository is primarily used for learning and experimenting with backend development concepts such as:

- CRUD operations
- Database relations
- Authentication
- API development
- Error handling
- Environment variables
- Prisma best practices

## Status

🚧 Work in progress

This project is actively being updated as I continue learning Prisma and backend development.

## Author

GitHub: [BeastTheNinja](https://github.com/BeastTheNinja)
