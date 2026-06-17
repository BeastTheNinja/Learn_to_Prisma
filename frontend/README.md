# Frontend

The frontend is built with React, TypeScript, Tailwind CSS, and React Router.

## Features

* Login Page
* Register Page
* Protected Routes
* Role-Based Navigation
* User List
* Delete Users (Admin Only)
* JWT Authentication
* Service Layer Architecture

## Tech Stack

* React
* TypeScript
* Tailwind CSS
* React Router
* JWT Decode

## Installation

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

## Project Structure

```text
src/
├── components/
├── pages/
├── routes/
├── services/
└── layouts/
```

## Authentication Flow

1. User registers
2. User logs in
3. JWT token is stored in localStorage
4. Protected routes validate authentication
5. Role-based UI is displayed based on JWT role

## Roles

Supported roles:

* USER
* ADMIN

Admin users can access admin-only pages and actions.

## Status

🚧 Learning project in active development.
