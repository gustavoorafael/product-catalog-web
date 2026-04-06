# Product Catalog - Full Stack Application

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![AWS S3](https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A complete Full Stack web application built to manage a product catalog. This project demonstrates modern architectural patterns, separating the frontend UI from a secure backend API, with cloud-based file storage.

## Live Demo
* [Frontend deployed on Vercel](#) * Backend hosted on AWS EC2
* Images stored on AWS S3

## Architecture Overview

This project was intentionally built with a decoupled architecture to ensure scalability and performance:

1. **Frontend (Client-Side):** A responsive Single Page Application (SPA) built with **Angular**. Features a custom "Cyber Dark" theme using CSS variables, reactive forms, and immediate DOM updates for a seamless user experience.
2. **Backend (API):** A robust RESTful API built with **NestJS**. It handles business logic, security validations, and orchestrates data flow between the database and cloud storage.
3. **Database:** **PostgreSQL** relational database used for persistent data storage (Products, Prices, Descriptions, Image URLs).
4. **Cloud Storage:** **Amazon S3** handles direct image hosting. The backend communicates securely with AWS via SDK to upload files, generating a public URL stored in the database.

## Key Features

- **Full CRUD Operations:** Create, Read, Update, and Delete equipment from the catalog.
- **Multipart Form Data:** Seamlessly send text data and binary files (images) in an orchestrated flow.
- **Dynamic Routing:** Frontend routing setup for smooth navigation between the Catalog view and the Admin Management Panel.
- **Cloud Image Upload:** Automatic upload of product images to an Amazon S3 Bucket with public-read permissions via CORS policy.
- **Modern UI/UX:** Dark mode aesthetic with floating hover effects and customized typography (Google Fonts: Montserrat & Rajdhani).

## Tech Stack

### Frontend
* **Framework:** Angular 19 (Standalone Components, No SSR for pure SPA experience)
* **Styling:** Custom CSS + Bootstrap grid system
* **HTTP:** Angular HttpClient with Fetch API enabled
* **Hosting:** Vercel

### Backend & Infrastructure
* **Framework:** NestJS
* **Language:** TypeScript
* **Database:** PostgreSQL (Hosted on AWS/Local)
* **Cloud Storage:** AWS S3 Bucket
* **ORM:** TypeORM

## ⚙️ How to Run Locally

### Frontend Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `ng serve`
4. Access `http://localhost:4200`

### Environment Variables (.env)
To run this project, you will need to add your AWS and Database credentials to your backend environment file.